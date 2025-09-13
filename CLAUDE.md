# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development Server**: `npm run dev` (runs on port 8080, not 3000)  
**Production Build**: `npm run build`  
**Development Build**: `npm run build:dev`  
**Linting**: `npm run lint`  
**Preview Build**: `npm run preview`

## Architecture Overview

This is a **terminal-themed landing page** built as a single-page React application. The architecture follows these key patterns:

### Component Structure
- **Landing Page Sections**: Each major section (Hero, Features, Pricing, FAQ, CTA) is a separate component in `src/components/`
- **UI Components**: shadcn/ui components in `src/components/ui/` - follow shadcn patterns when modifying
- **Terminal Theme**: Custom terminal-inspired components (`TerminalLogo`, `TerminalWindow`) with specific styling

### Theme System
- **CSS Variables**: All colors defined as HSL values in `src/index.css` using CSS custom properties
- **Terminal Colors**: Custom `terminal.*` color tokens (`terminal-bg`, `terminal-text`, `terminal-accent`, `terminal-success`)
- **Design Tokens**: Gradients, shadows, and transitions defined as CSS variables
- **Font**: JetBrains Mono is the primary monospace font for terminal aesthetic

### Component Conventions
- **Styling**: Use `cn()` utility from `@/lib/utils` for combining Tailwind classes
- **Imports**: Path aliases configured (`@/` maps to `src/`)
- **Terminal Styling**: Components use `font-mono` class and terminal color variants

### State Management
- **React Query**: Configured but not actively used - setup for future data needs
- **React Router**: Single page with Index route and NotFound fallback
- **No Global State**: Currently static content only

## Key Technical Details

### TypeScript Configuration
- **Relaxed Strictness**: `noImplicitAny: false`, `strictNullChecks: false` for rapid prototyping
- **Path Aliases**: `@/*` maps to `./src/*`

### Tailwind Configuration
- **Custom Theme**: Extended with terminal colors and design system tokens
- **shadcn/ui Integration**: Uses CSS variables for theming
- **Animation**: Custom accordion animations and terminal effects

### Build Configuration
- **Vite**: React SWC plugin for fast builds
- **Development**: Lovable tagger plugin in dev mode
- **Server**: Custom port 8080 with IPv6 support

## Component Patterns

### Adding New Sections
When adding landing page sections, follow the existing pattern:
1. Create component in `src/components/[SectionName].tsx`
2. Import and add to `src/pages/Index.tsx`
3. Use terminal theme colors and monospace fonts for consistency

### UI Components
- Use existing shadcn/ui components from `src/components/ui/`
- For new UI needs, add via shadcn CLI: `npx shadcn@latest add [component]`
- Custom terminal components should maintain the terminal aesthetic

### Styling Approach
- **Terminal Colors**: Use `terminal-*` color variants for authentic terminal look
- **Gradients**: Use predefined gradient classes (`bg-gradient-terminal`, etc.)
- **Typography**: Mix `font-mono` for terminal elements with sans-serif for readability

## Content Updates

All content is currently hardcoded in components. When updating:
- **Hero Content**: `src/components/HeroSectionTerminal.tsx`
- **Features**: `src/components/FeatureCards.tsx` 
- **Pricing**: `src/components/PricingSection.tsx`
- **FAQ**: `src/components/FAQSection.tsx`

## Product Information

This landing page promotes **twhisper**, a terminal-based voice-to-text transcription tool with AI-powered features:

### What twhisper Does
- **Voice-to-Text Transcription**: Transforms speech into formatted text using AI
- **Smart Recording**: Records audio with spacebar press
- **Intelligent Formatting**: Multiple formatting modes (default, email, code, message, slack, professional casual)
- **Local & Cloud Processing**: Supports local whisper.cpp and Azure OpenAI Whisper

### Core Features
- 🎤 Voice Recording with keyboard controls
- 🤖 AI Transcription (local whisper.cpp by default) 
- ✨ Smart Text Formatting for different contexts
- 📋 Automatic Clipboard Copy
- ⌨️ Intuitive Keyboard Controls

### Pricing Structure
**Free Plan**: 1-minute recordings, all formatting modes, full AI transcription
**Premium Plan**: 10-minute recordings, real-time streaming, priority support

### Technical Details
- **Primary Platform**: macOS (Homebrew installation)
- **Requirements**: Azure OpenAI Account (optional Azure OpenAI Whisper Deployment)
- **Installation**: `brew tap svenmalvik/twhisper && brew install twhisper`

### Target Use Cases
- Email drafting with appropriate formatting
- Code documentation and comments
- Professional messaging (Slack, Teams)
- General transcription with context-aware formatting

## Important Notes

- **No Testing Framework**: Tests should be added before major changes
- **Static Site**: No backend integration or dynamic data
- **Terminal Theme**: Maintain consistency with dark terminal aesthetic (matches twhisper's terminal nature)
- **Performance**: Large shadcn/ui bundle - consider tree-shaking for production optimization