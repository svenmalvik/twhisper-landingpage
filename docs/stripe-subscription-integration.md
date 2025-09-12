# Stripe Subscription Integration for Twhisper Premium Features

**Document Version:** 2.0  
**Created:** September 11, 2024  
**Updated:** September 11, 2024  
**Status:** Revised - Simplified Architecture  
**Priority:** High  

## Overview

This specification defines the implementation of Stripe subscription management for Twhisper to enable premium features (primarily streaming transcription) through a monthly subscription model. The solution uses a webhook-driven architecture with secure database caching, where Stripe webhooks trigger real-time database updates and subscription status is cached for optimal performance.

## Functional Requirements

### FR1: Subscription Management
- **FR1.1** Authenticated users must be able to subscribe to Twhisper Premium
- **FR1.2** Users must be able to view their current subscription status via direct Stripe API queries
- **FR1.3** Users must be able to cancel their subscription through Stripe Customer Portal
- **FR1.4** Users must be able to update payment methods through Stripe Customer Portal
- **FR1.5** System must handle Stripe webhooks to update subscription data in real-time and cache for performance
- **FR1.6** System must enforce premium feature access based on webhook-updated, database-cached subscription status

### FR2: Premium Feature Access Control
- **FR2.1** Streaming transcription must require active subscription
- **FR2.2** Non-premium features must remain available to all authenticated users
- **FR2.3** Premium features must be disabled when subscription expires or fails
- **FR2.4** System must provide clear messaging about premium requirements
- **FR2.5** Users must be guided through subscription process when accessing premium features

### FR3: Billing and Payment Processing
- **FR3.1** System must support monthly recurring billing
- **FR3.2** System must handle payment failures gracefully
- **FR3.3** Users must receive payment confirmations and receipts
- **FR3.4** System must support prorated charges for mid-cycle changes
- **FR3.5** System must comply with PCI DSS requirements (handled by Stripe)

### FR4: Usage Analytics (Simplified)
- **FR4.1** System may optionally track local usage metrics for premium features
- **FR4.2** Subscription analytics handled directly by Stripe Dashboard
- **FR4.3** No complex analytics infrastructure required for MVP
- **FR4.4** Future: Consider analytics if usage patterns require it

### FR5: Command Line Interface
- **FR5.1** `twhisper subscribe` command must open web browser to payment page
- **FR5.2** `twhisper subscription` command must show current status from database cache
- **FR5.3** `twhisper unsubscribe` command must open Stripe Customer Portal
- **FR5.4** Premium feature commands must check subscription status via database queries
- **FR5.5** System must cache subscription status in database for 24 hours to minimize API calls

## Non-Functional Requirements

### NFR1: Security and Compliance
- **NFR1.1** Payment data must never be stored in Twhisper systems
- **NFR1.2** All Stripe webhook communications must use signature verification for security
- **NFR1.3** Subscription status queries must be server-side validated
- **NFR1.4** System must comply with PCI DSS Level 1 requirements (via Stripe)
- **NFR1.5** Customer IDs and subscription data must be securely stored in database with Row Level Security
- **NFR1.6** Webhook processing must be idempotent to handle duplicate events

## Technical Architecture

### System Components (Webhook-Driven Architecture)

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Twhisper CLI  │───▶│  Supabase Edge   │───▶│   Stripe API    │
│                 │    │   Functions      │    │                 │
│ (Query Database)│    │(Webhooks+Cache)  │    │ (Query Status)  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         │                       ▼                       │
         │              ┌──────────────────┐             │
         └─────────────▶│  Supabase DB     │             │
                        │(Users+Sessions+  │             │
                        │ Subscriptions)   │             │
                        └──────────────────┘             │
                                 ▲                       │
                                 │                       ▼
┌─────────────────┐    ┌─────────┴────────┐    ┌─────────────────┐
│  GitHub Pages   │───▶│  Stripe Checkout │───▶│  Stripe         │
│(Session+Payment)│    │ (with metadata)  │    │  Webhooks       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Webhook-Driven Architecture Components

1. **Twhisper CLI** - Terminal application with session token generation and database queries
2. **GitHub Pages** - Static frontend for landing page and payment portal with session linking
3. **Supabase Database** - Secure storage of users, sessions, and webhook-updated subscriptions
4. **Supabase Edge Functions** - Webhook handlers and status API with database caching
5. **Stripe Webhooks** - Real-time subscription event processing
6. **Stripe API** - Fallback queries for cache refresh and Customer Portal URLs
7. **Stripe Customer Portal** - Self-service subscription management

### Database Schema Extension for Webhooks and Caching

```sql
-- Extend existing users table for Stripe integration and webhook updates
ALTER TABLE users ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT UNIQUE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'none';
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_expires_at TIMESTAMP WITH TIME ZONE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Session tokens to link CLI users with Stripe payments
CREATE TABLE subscription_sessions (
  session_token TEXT PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() + INTERVAL '1 hour'
);

-- Webhook event processing log for idempotency
CREATE TABLE webhook_events (
  stripe_event_id TEXT PRIMARY KEY,
  event_type TEXT NOT NULL,
  processed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_users_stripe_customer ON users(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_users_subscription_status ON users(subscription_status);
CREATE INDEX IF NOT EXISTS idx_users_subscription_expires ON users(subscription_expires_at);
CREATE INDEX IF NOT EXISTS idx_subscription_sessions_token ON subscription_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_webhook_events_stripe_id ON webhook_events(stripe_event_id);
```

### API Contracts

#### Webhook-Driven Subscription API

**Supabase Edge Functions:**
- `/functions/v1/subscription` - Status queries and portal URLs
- `/functions/v1/webhooks/stripe` - Webhook event processing

```typescript
// GET /functions/v1/subscription
interface SubscriptionStatusResponse {
  success: boolean;
  data?: {
    has_active_subscription: boolean;
    subscription?: {
      id: string;
      status: string;
      current_period_end: string;
      cancel_at_period_end: boolean;
    };
    cached_at: string; // When data was cached in database
    expires_at: string; // When cache expires
    customer_portal_url?: string; // For subscription management
  };
  error?: {
    code: string;
    message: string;
  };
}
```

```typescript
// POST /functions/v1/subscription (for portal URL)
interface CustomerPortalRequest {
  return_url?: string; // Where to redirect after portal session
}

interface CustomerPortalResponse {
  success: boolean;
  data?: {
    portal_url: string; // Stripe Customer Portal URL
  };
  error?: {
    code: string;
    message: string;
  };
}
```

#### Stripe Webhook Handler

```typescript
// POST /functions/v1/webhooks/stripe
interface StripeWebhookEvent {
  id: string;
  object: string;
  api_version: string;
  created: number;
  data: {
    object: any;
    previous_attributes?: any;
  };
  livemode: boolean;
  pending_webhooks: number;
  request: {
    id: string;
    idempotency_key: string;
  };
  type: string; // customer.subscription.created, customer.subscription.updated, etc.
}

interface WebhookResponse {
  success: boolean;
  processed: boolean;
  message?: string;
}
```

### Subscription Flow

#### 1. Subscription Creation Flow

```bash
twhisper subscribe
```

1. **CLI Session Generation**
   - Check user authentication status
   - Verify user doesn't have active subscription
   - Generate unique session token and store in database with user_id
   - Open web browser to GitHub Pages payment portal with session token

2. **Web Payment Processing (GitHub Pages)**
   - User selects subscription plan on static landing page
   - Redirect to Stripe Checkout with customer metadata (session token)
   - User completes payment through Stripe's secure interface
   - Stripe redirects to success/cancel pages on GitHub Pages

3. **Webhook Processing (Real-time Database Update)**
   - Stripe sends webhook to Supabase Edge Function for subscription events
   - Webhook handler verifies signature and processes event idempotently
   - Look up user_id using session_token from webhook metadata
   - Update user's subscription status in database immediately
   - Log webhook event for idempotency

4. **CLI Status Query (Database Cache)**
   - CLI queries Supabase Edge Function for subscription status
   - Edge Function returns cached status from database (updated by webhooks)
   - Fallback to Stripe API query if cache is stale (>24 hours)
   - Return current subscription status to CLI

#### 2. Premium Feature Access Check

```bash
twhisper --mode streaming [start recording]
```

1. **Feature Access Validation**
   - Query subscription status from Supabase database (webhook-updated cache)
   - Database contains real-time subscription data from Stripe webhooks
   - Determine feature access permissions based on cached webhook data
   - Proceed with feature or show upgrade prompt

2. **Webhook-Driven Security**
   - All subscription status updates come from authenticated Stripe webhooks
   - User cannot bypass validation by manipulating local files or database
   - Database protected by Row Level Security and webhook signature verification

#### 3. Subscription Management

```bash
twhisper subscription
```

1. **Status Display**
   - Fetch current subscription details
   - Show billing information
   - Display usage statistics
   - Provide management options

## Acceptance Criteria

### AC1: Subscription Creation Success Path
- **Given** authenticated user runs `twhisper subscribe`
- **When** payment method is successfully processed
- **Then** user subscription is activated
- **And** premium features are immediately accessible
- **And** user receives confirmation email
- **And** billing cycle begins

### AC2: Premium Feature Access Control
- **Given** user attempts to use streaming transcription
- **When** user has active subscription
- **Then** feature works normally
- **And** usage is tracked
- **When** user has no subscription
- **Then** feature is blocked with upgrade prompt
- **And** user is guided to subscription flow

### AC3: Subscription Cancellation
- **Given** user has active subscription
- **When** user runs `twhisper unsubscribe`
- **Then** subscription is set to cancel at period end
- **And** premium access continues until period end
- **And** user receives cancellation confirmation
- **And** renewal is prevented

### AC4: Payment Failure Handling
- **Given** subscription payment fails
- **When** CLI queries subscription status
- **Then** fresh Stripe API data shows past_due status
- **And** premium features are disabled based on API response
- **And** user is directed to Customer Portal for payment update

### AC5: Webhook Processing
- **Given** Stripe subscription event occurs (payment, cancellation, etc.)
- **When** webhook is received by Supabase Edge Function
- **Then** webhook signature is verified and event is processed idempotently
- **And** user subscription status is updated in database in real-time
- **And** webhook event is logged to prevent duplicate processing

### AC6: Session Token Linking
- **Given** user completes payment in Stripe Checkout
- **When** webhook contains session_token in metadata
- **Then** session token is used to identify the correct Supabase user
- **And** user's subscription status is updated accurately in database
- **And** session token is expired to prevent reuse

## Implementation Guidelines

### Phase 1: Simplified Subscription Management (Sprint 1)

1. **Stripe Setup with Webhooks**
   - Create Stripe account and configure products/prices
   - Set up webhook endpoints pointing to Supabase Edge Functions
   - Configure customer portal for self-service
   - Configure webhook events (subscription.created, subscription.updated, etc.)

2. **Database Schema Extension**
   - Add subscription columns to existing users table
   - Create session tokens table for CLI-to-payment linking
   - Create webhook events table for idempotency
   - Implement Row Level Security for data protection
   - Create indexes for performance optimization

3. **GitHub Pages Frontend with Session Tokens**
   - Create static landing page with subscription plans
   - Implement Stripe Checkout integration with session metadata
   - Add success/cancel redirect pages
   - Set up GitHub Actions for automated deployment

4. **Supabase Edge Functions (Webhooks + API)**
   - Implement webhook handler for Stripe events
   - Implement subscription status API with database cache
   - Add webhook signature verification for security
   - Customer Portal URL generation
   - Deploy functions using Supabase CLI

5. **CLI Integration with Session Tokens**
   - Add subscription commands to CLI
   - Implement session token generation and browser opening
   - Query subscription status from webhook-updated database
   - Integrate with Edge Functions for server-side validation

### Phase 2: Feature Access Control (Sprint 2)

1. **Server-Validated Premium Feature Gates**
   - Implement access control middleware with database validation
   - Add subscription validation to streaming mode via database queries
   - Use secure database cache for subscription status (user cannot manipulate)
   - Ensure all premium features validate through server-side database queries

## Risk Assessment

### High Risk Areas

**Payment Processing Security**
- **Risk:** Compromise of payment data or unauthorized access
- **Mitigation:** Use Stripe's secure payment processing, never store card data
- **Monitoring:** Audit all payment-related code and access patterns

**API Rate Limits**
- **Risk:** Exceeding Stripe API rate limits with frequent queries
- **Mitigation:** 24-hour caching reduces API calls to ~1 per user per day
- **Monitoring:** Track API usage and implement backoff if needed

### Medium Risk Areas

**Feature Access Bypass**
- **Risk:** Users accessing premium features without valid subscription
- **Mitigation:** Server-side validation for all premium feature access
- **Testing:** Comprehensive access control testing scenarios

**Database Cache Security**
- **Risk:** Users attempting to manipulate cached subscription data
- **Mitigation:** Database protected by Row Level Security, user cannot access/modify cache
- **Monitoring:** Monitor for unusual access patterns and failed RLS policy attempts

### Low Risk Areas

**CLI Integration Complexity**
- **Risk:** Poor user experience in terminal payment flows
- **Mitigation:** Thorough UX testing and clear error messages
- **Fallback:** Web-based payment flow as alternative

## Assumptions

1. **Stripe Reliability:** Stripe maintains 99.95% uptime and API reliability
2. **User Payment Methods:** Users have valid payment methods (credit/debit cards)
3. **Regulatory Compliance:** Stripe handles PCI DSS and regional payment regulations
4. **API Reliability:** Stripe API maintains high availability for direct queries
5. **Feature Adoption:** Users will subscribe for streaming transcription premium feature
6. **Price Acceptance:** Monthly subscription pricing will be accepted by target users

## Dependencies

### External Services
- Stripe payment processing platform and API
- Stripe Customer Portal for subscription management
- GitHub Pages for static frontend hosting
- Existing Google OAuth authentication system
- Supabase Edge Functions (single function)

### Internal Components
- Twhisper CLI application with 24-hour caching
- GitHub Pages static frontend (landing page and payment portal)
- Single Supabase Edge Function (API proxy)
- AuthenticationService for user validation
- ConfigurationService for Stripe and Supabase API keys
- Processing Pipeline for premium feature integration

### Development Tools
- Stripe CLI for webhook testing
- Stripe Dashboard for subscription management
- Supabase CLI for function deployment and database management
- GitHub Actions for automated deployment to GitHub Pages

## Success Metrics

### Technical Metrics
- Subscription creation success rate > 95%
- API query success rate > 99.9%
- Premium feature access check latency < 50ms (database cache) / < 500ms (fresh API query)
- Payment processing completion time < 30 seconds
- Database cache hit ratio > 95% (most requests served from cache)

### Business Metrics
- Monthly subscription conversion rate > 5%
- Monthly churn rate < 5%
- Customer lifetime value (CLV) tracking
- Monthly Recurring Revenue (MRR) growth

### User Experience Metrics
- Time to complete subscription < 3 minutes
- Subscription-related support tickets < 2% of users
- User satisfaction with billing process
- Premium feature adoption rate among subscribers

## Pricing Strategy

### Subscription Tiers

**Twhisper Premium - €9.99/month**
- Unlimited streaming transcription
- Advanced formatting modes
- Priority customer support
- Usage analytics dashboard
- Export capabilities

**Future Considerations**
- Annual subscription discount (20% off)
- Team/business plans
- Usage-based pricing for high-volume users

## Compliance and Legal

### Data Protection
- Subscription data handling complies with GDPR
- User consent for billing data collection
- Right to data deletion including billing records
- Encrypted storage of subscription metadata

### Terms of Service Updates
- Subscription terms and conditions
- Automatic renewal clauses
- Cancellation policy
- Usage limitations and fair use policy

---

**Next Steps:**
1. Review and approve hybrid architecture approach (GitHub Pages + Supabase)
2. Set up Stripe account and configure products with webhook endpoints
3. Create GitHub repository for static frontend and set up GitHub Pages
4. Begin Phase 1 implementation with Supabase database schema
5. Develop Supabase Edge Functions for webhook processing
6. Implement CLI browser integration for subscription flow
7. Deploy and test end-to-end subscription workflow