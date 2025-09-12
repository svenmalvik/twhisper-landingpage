# Stripe Subscription Integration - Simplified Implementation Todos

**Based on:** `stripe-subscription-integration-plan.md`  
**Original Specification:** `stripe-subscription-integration.md`  
**Created:** September 11, 2024  
**Updated:** September 11, 2024 (Simplified Architecture)  
**Total Tasks:** 44  
**Estimated Duration:** 3-4 weeks (2 sprints)  

## Overview

This document contains the actionable todo list for implementing Stripe subscription management in Twhisper using a webhook-driven architecture. The approach uses Stripe webhooks for real-time payment processing while maintaining security through session token linking and performance through database caching.

## Task Progress Summary

- **Total Tasks:** 44
- **Pending:** 27
- **In Progress:** 3  
- **Completed:** 21
- **Deferred to Production:** 4

## Phase 1A: Infrastructure Setup and Configuration

### Stripe Account Configuration (Task 1.1)
- [x] Create Stripe account and enable test/live modes `[Plan: Task 1.1] [Spec: Simplified Stripe Setup]`
- [x] Set up products and pricing (€9.99/month Premium tier) `[Plan: Task 1.1] [Spec: Webhook-Driven Stripe Setup]`
- [x] Configure webhook endpoints pointing to Supabase Edge Functions `[Plan: Task 1.1] [Spec: Webhook-Driven Stripe Setup]`
- [x] Configure customer portal for self-service subscription management `[Plan: Task 1.1] [Spec: Webhook-Driven Stripe Setup]`
- [x] Generate and secure API keys for development/production environments `[Plan: Task 1.1] [Spec: Webhook-Driven Stripe Setup]`
- [x] Set up webhook events (customer.subscription.*, invoice.payment_*) `[Plan: Task 1.1] [Spec: Webhook-Driven Stripe Setup]`

### Supabase Project Setup (Task 1.2)
- [x] Add Stripe-related environment variables to existing Supabase project `[Plan: Task 1.2] [Spec: Technical Architecture - System Components]`
- [x] Verify existing authentication policies and Row Level Security work with new schema `[Plan: Task 1.2] [Spec: Technical Architecture - System Components]`
- [x] Confirm service role permissions for Edge Function deployment `[Plan: Task 1.2] [Spec: Technical Architecture - System Components]`

### Frontend Development (Task 1.3) - Moved to Phase 1C
- [x] Create static frontend running on localhost:8080 `[Plan: Task 1.3] [Spec: System Components - Static Frontend]`
- *Remaining frontend tasks moved to Phase 1C below*

## Phase 1B: Minimal Database Changes

### Database Schema Extension (Task 1.4)
- [x] Add stripe_customer_id column to existing users table `[Plan: Task 1.4] [Spec: User Authentication Integration]`
- [x] Add subscription_status column to existing users table `[Plan: Task 1.4] [Spec: User Authentication Integration]`
- [x] Add subscription_expires_at column to existing users table `[Plan: Task 1.4] [Spec: User Authentication Integration]`
- [x] Add subscription_updated_at column to existing users table `[Plan: Task 1.4] [Spec: User Authentication Integration]`
- [x] Create subscription_sessions table for CLI-to-payment linking `[Plan: Task 1.4] [Spec: Session Token Linking]`
- [x] Create webhook_events table for idempotent webhook processing `[Plan: Task 1.4] [Spec: Webhook Processing]`
- [x] Add indexes for performance optimization `[Plan: Task 1.4] [Spec: User Authentication Integration]`
- [x] Verify schema changes work with existing users table structure `[Plan: Task 1.4] [Spec: User Authentication Integration]`

### Authentication Integration (Task 1.5)
- [x] Ensure existing RLS policies cover new stripe_customer_id column `[Plan: Task 1.5] [Spec: NFR1.5 - Access Control Validation]`
- [x] Set up service role permissions for API proxy function `[Plan: Task 1.5] [Spec: NFR1.5 - Access Control Validation]`
- [x] Link Stripe customer IDs securely with user authentication `[Plan: Task 1.5] [Spec: NFR1.5 - Access Control Validation]`

## Phase 1C: Frontend Development (Separate Repository)

### Complete Local Frontend Testing (Task 1.3 - Remaining)
- [x] Complete Stripe integration testing on localhost `[Plan: Task 1.3] [Spec: System Components - Static Frontend]`
- [x] Validate CLI-to-web payment flow with session tokens `[Plan: Task 1.3] [Spec: System Components - Static Frontend]`
- [x] Test success/cancel page redirects locally `[Plan: Task 1.3] [Spec: System Components - Static Frontend]`

### Landing Page Implementation (Task 1.6)
- [x] Create responsive landing page with subscription plan presentation `[Plan: Task 1.6] [Spec: Subscription Flow 2 - Web Payment Processing]`
- [x] Implement pricing display (€9/month Premium tier) `[Plan: Task 1.6] [Spec: Subscription Flow 2 - Web Payment Processing]`
- [x] Add feature comparison table and call-to-action buttons `[Plan: Task 1.6] [Spec: Subscription Flow 2 - Web Payment Processing]`
- [x] Implement session token handling from CLI redirect 
- [x] URLs `[Plan: Task 1.6] [Spec: Subscription Flow 2 - Web Payment Processing]`

### Stripe Checkout Integration (Task 1.7)
- [x] Integrate Stripe.js with Checkout sessions `[Plan: Task 1.7] [Spec: Subscription Flow 2 - Stripe Checkout Integration]`
- [x] Implement customer metadata passing (session tokens from CLI) `[Plan: Task 1.7] [Spec: Subscription Flow 2 - Stripe Checkout Integration]`
- [x] Configure success and cancel redirect URLs `[Plan: Task 1.7] [Spec: Subscription Flow 2 - Stripe Checkout Integration]`
- [x] Add loading states and error handling for payment failures `[Plan: Task 1.7] [Spec: Subscription Flow 2 - Stripe Checkout Integration]`

### Success/Cancel Pages (Task 1.8)
- [ ] Create subscription success page with confirmation message `[Plan: Task 1.8] [Spec: Subscription Flow 2 - Redirect Pages]`
- [ ] Create payment cancellation page with retry options `[Plan: Task 1.8] [Spec: Subscription Flow 2 - Redirect Pages]`
- [ ] Add subscription management portal links `[Plan: Task 1.8] [Spec: Subscription Flow 2 - Redirect Pages]`
- [ ] Simple status display (no polling needed) `[Plan: Task 1.8] [Spec: Simplified Architecture]`

## Phase 1D: Single Supabase Edge Function Development

### Webhook Handler and Subscription API Functions (Task 1.9)
- [ ] Create webhook handler function for Stripe events `[Plan: Task 1.9] [Spec: Webhook-Driven Subscription API]`
- [ ] Implement webhook signature verification for security `[Plan: Task 1.9] [Spec: NFR1.2]`
- [ ] Handle subscription lifecycle events (created, updated, canceled) `[Plan: Task 1.9] [Spec: Webhook Processing]`
- [ ] Process session_token metadata to link payments to users `[Plan: Task 1.9] [Spec: Session Token Linking]`
- [ ] Update user subscription status in database via webhooks `[Plan: Task 1.9] [Spec: Webhook Processing]`
- [ ] Implement idempotent processing to prevent duplicate updates `[Plan: Task 1.9] [Spec: NFR1.6]`
- [ ] Create subscription status API with database cache queries `[Plan: Task 1.9] [Spec: Webhook-Driven Subscription API]`
- [ ] Handle Customer Portal URL generation `[Plan: Task 1.9] [Spec: Webhook-Driven Subscription API]`
- [ ] Add comprehensive error handling and logging `[Plan: Task 1.9] [Spec: Webhook-Driven Subscription API]`
- [ ] Deploy functions to existing Supabase project using Supabase CLI `[Plan: Task 1.9] [Spec: Webhook-Driven Subscription API]`

## Phase 2A: CLI Integration Development

### Subscription Service Implementation (Task 2.1)
- [ ] Create SubscriptionService class in service architecture `[Plan: Task 2.1] [Spec: FR5.1-5.5]`
- [ ] Implement session token generation for web flow linking `[Plan: Task 2.1] [Spec: FR5.1-5.5]`
- [ ] Add browser opening functionality for payment redirect `[Plan: Task 2.1] [Spec: FR5.1-5.5]`
- [ ] Implement session token generation for CLI-to-payment linking `[Plan: Task 2.1] [Spec: Session Token Linking]`
- [ ] Query subscription status from webhook-updated database `[Plan: Task 2.1] [Spec: Webhook-Driven Updates]`
- [ ] Handle webhook-updated subscription data securely `[Plan: Task 2.1] [Spec: Webhook-Driven Updates]`

### CLI Command Implementation (Task 2.2)
- [ ] Add subscribe command that opens browser to payment portal `[Plan: Task 2.2] [Spec: FR5 - Command Line Interface]`
- [ ] Add subscription command for status display with cached/fresh data `[Plan: Task 2.2] [Spec: FR5 - Command Line Interface]`
- [ ] Add unsubscribe command that opens Stripe Customer Portal `[Plan: Task 2.2] [Spec: FR5 - Command Line Interface]`
- [ ] Implement command help text and error handling `[Plan: Task 2.2] [Spec: FR5 - Command Line Interface]`
- [ ] Add subscription management portal URL provision `[Plan: Task 2.2] [Spec: FR5 - Command Line Interface]`

### Database-Cached Status Handling (Task 2.3)
- [ ] Handle database-cached subscription status in CLI `[Plan: Task 2.3] [Spec: Optimized API Usage Pattern]`
- [ ] Implement status display from secure database cache `[Plan: Task 2.3] [Spec: Optimized API Usage Pattern]`
- [ ] Handle scenarios where database cache needs refresh `[Plan: Task 2.3] [Spec: Optimized API Usage Pattern]`
- [ ] Minimize API calls through server-side caching strategy `[Plan: Task 2.3] [Spec: Optimized API Usage Pattern]`

## Phase 2B: Premium Feature Access Control

### Server-Validated Access Control (Task 2.4)
- [ ] Create premium feature validation middleware in CLI `[Plan: Task 2.4] [Spec: FR2 - Premium Feature Access Control]`
- [ ] Integrate with existing ProcessingPipeline for server validation `[Plan: Task 2.4] [Spec: FR2 - Premium Feature Access Control]`
- [ ] Query subscription status from Supabase for each premium feature use `[Plan: Task 2.4] [Spec: FR2.1, AC2]`
- [ ] Implement secure server-side validation (user cannot bypass) `[Plan: Task 2.4] [Spec: FR2.1, AC2]`
- [ ] Implement graceful degradation for expired subscriptions `[Plan: Task 2.4] [Spec: FR2.2]`
- [ ] Add upgrade prompts with subscription flow links `[Plan: Task 2.4] [Spec: FR2.4-2.5]`

### Simple Status Display (Task 2.5)
- [ ] Create subscription status UI component `[Plan: Task 2.5] [Spec: Subscription Management Flow 1 - Status Display]`
- [ ] Display subscription status and next payment date `[Plan: Task 2.5] [Spec: FR1.2]`
- [ ] Add Customer Portal access for detailed management `[Plan: Task 2.5] [Spec: FR1.2]`
- [ ] Keep UI simple and focused `[Plan: Task 2.5] [Spec: Subscription Management Flow 1 - Status Display]`

## Phase 3: Production Deployment

### Production Environment Setup (Task 3.1)
- [ ] Configure production Stripe account (no webhooks needed) `[Plan: Task 3.1] [Spec: Dependencies - External Services]`
- [ ] Deploy Supabase Edge Function to existing production Supabase project `[Plan: Task 3.1] [Spec: Dependencies - External Services]`
- [ ] Configure production environment variables in existing Supabase project `[Plan: Task 3.1] [Spec: Dependencies - External Services]`

### GitHub Pages Production Deployment (Task 1.3b - Moved from Phase 1A)
- [ ] Create dedicated repository for static frontend `[Plan: Task 1.3b] [Spec: System Components - GitHub Pages]`
- [ ] Configure GitHub Pages deployment with custom domain `[Plan: Task .3b] [Spec: System Components - GitHub Pages]`
- [ ] Set up GitHub Actions for automated deployment pipeline `[Plan: Task 1.3b] [Spec: System Components - GitHub Pages]`
- [ ] Configure production environment secrets for Stripe public keys `[Plan: Task 1.3b] [Spec: System Components - GitHub Pages]`

### Launch and Monitoring (Task 3.2)
- [ ] Deploy CLI updates with subscription functionality `[Plan: Task 3.2] [Spec: Production Deployment]`
- [ ] Monitor initial subscription conversions and technical metrics `[Plan: Task 3.2] [Spec: Production Deployment]`
- [ ] Track API usage patterns and cache effectiveness `[Plan: Task 3.2] [Spec: Production Deployment]`
- [ ] Collect user feedback and usage data `[Plan: Task 3.2] [Spec: Production Deployment]`

## Files to Create/Modify

### New Files to Create
- Database schema script - Add subscription tables and columns (users extension, session_tokens, webhook_events)
- `index.html` - Main landing page
- `styles.css` - Responsive styling  
- `scripts.js` - JavaScript for Stripe integration
- `success.html` - Payment success confirmation
- `cancel.html` - Payment cancellation handling
- `supabase/functions/stripe-webhook/index.ts` - Webhook handler function\n- `supabase/functions/subscription/index.ts` - Subscription status API
- `supabase/functions/subscription/types.ts` - TypeScript types
- `src/services/SubscriptionService.ts` - CLI subscription service
- `src/types/subscription.ts` - Subscription types
- `src/ui/components/SubscriptionStatus.tsx` - Status display component

### Files to Modify
- `src/index.ts` - Add command definitions
- `src/ui/App.tsx` - Add subscription status display components
- `src/services/ProcessingPipeline.ts` - Server-validated access control middleware
- `src/services/RecordingService.ts` - Streaming mode validation
- `src/services/ConfigurationService.ts` - Supabase configuration

## Acceptance Criteria Mapping

Each task maps to specific acceptance criteria from the original specification:

- **AC1 - Payment Processing:** Tasks 1.6-1.8, 2.2
- **AC2 - Premium Feature Access:** Tasks 2.4-2.5
- **AC3 - Customer Portal Access:** Tasks 1.9, 2.2, 2.5
- **AC4 - Fresh Data Retrieval:** Task 1.9, 2.1, 2.3
- **AC5 - Fresh Data Retrieval:** Task 1.9
- **AC6 - Real-time Status Accuracy:** Tasks 1.4-1.5, 1.9

## Success Metrics

### Technical Metrics
- Subscription creation success rate >95%
- API query success rate >99.9%
- Premium feature access check latency <50ms cached / <500ms fresh
- Payment processing completion time <30 seconds

### Business Metrics
- Monthly subscription conversion rate >5%
- Monthly churn rate <5%
- Use Stripe Dashboard for comprehensive analytics
- Future: Custom analytics if needed

### User Experience Metrics
- Time to complete subscription <3 minutes
- Subscription-related support tickets <2% of users
- User satisfaction with billing process
- Premium feature adoption rate tracking among subscribers

## Key Adjustments for Existing Supabase Project

### Leveraging Existing Infrastructure
- **Existing Database:** Use current Supabase database with minimal schema changes
- **Existing Auth:** Build on current Google OAuth authentication system
- **Existing RLS:** Extend current Row Level Security policies
- **Existing Environment:** Add Stripe configuration to current setup

### Minimal Integration Points
- **Simple Schema Addition:** Only add stripe_customer_id column to existing users table
- **Single Function:** Deploy one Edge Function to existing Supabase project (API proxy only)
- **Environment Variables:** Add Stripe keys to existing configuration
- **CLI Integration:** Extend current service architecture with server-validated access control

### Server-Side Cached Validation Architecture
- **Database Caching:** Subscription status cached securely in Supabase database
- **Server Validation:** Premium feature access validated through Supabase queries (unhackable)
- **Fresh Updates:** Edge Function queries Stripe API and updates database when cache expires (24 hours)
- **Secure Source:** All subscription data comes from Stripe API, cached in protected database
- **User Cannot Bypass:** Database access controlled by Row Level Security, user cannot manipulate

## Implementation Benefits

- **40% Faster Development:** 19 days vs 34 days estimated effort
- **Reduced Maintenance:** No webhook reliability or sync issues to monitor
- **Cost Effective:** ~1 API call per user per day with 24-hour caching
- **Always Accurate:** Direct Stripe API queries eliminate sync discrepancies
- **Simpler Testing:** Fewer integration points and edge cases to test
- **Existing Infrastructure:** Leverages current Supabase setup without major changes

## Next Steps

1. Begin with Phase 1A infrastructure setup tasks
2. Ensure each phase is completed before moving to the next
3. Update task status as work progresses
4. Validate completion against acceptance criteria
5. Monitor success metrics throughout implementation
6. Leverage simplified architecture for faster iteration