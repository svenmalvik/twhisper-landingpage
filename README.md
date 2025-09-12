# Twhisper Landing Page

A modern, terminal-inspired landing page for Twhisper - an AI-powered voice-to-text transcription tool built for developers, writers, and professionals.

## Overview

This is a React-based single-page application (SPA) that serves as the marketing landing page for Twhisper. The application features a terminal-themed UI with dark mode styling, showcasing the product's features, pricing, and use cases.

## Architecture

### System Components

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Browser       │────│   React Router   │────│   Page Routes   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                       ┌────────▼────────┐
                       │   App.tsx       │
                       │   - Providers   │
                       │   - Routing     │
                       └─────────────────┘
                                │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
┌───────▼───────┐    ┌────────▼────────┐    ┌───────▼───────┐
│ Index Page    │    │  UI Components  │    │ Shared Utils  │
│ - Hero        │    │  - shadcn/ui    │    │ - Hooks       │
│ - Features    │    │  - Custom       │    │ - Utilities   │
│ - Pricing     │    │  - Terminal     │    └───────────────┘
│ - FAQ         │    └─────────────────┘
│ - CTA         │
└───────────────┘
```

### Key Components

- **Layout**: Single-page layout with scrollable sections
- **HeroSectionTerminal**: Main hero section with terminal-inspired design
- **FeatureCards**: Product feature showcase
- **UseCasesSection**: Target audience and use case examples
- **PricingSection**: Pricing tiers and plans
- **FAQSection**: Frequently asked questions
- **CTASection**: Call-to-action for user conversion
- **Footer**: Contact and legal information

### Data Flow

- Static content (no external APIs)
- React Query setup for future data fetching needs
- Client-side routing with React Router DOM
- State management through React hooks and context

## Technology Stack

### Core Framework
- **React 18.3.1**: Frontend framework with modern hooks
- **TypeScript 5.8.3**: Type safety and development experience
- **Vite 5.4.19**: Build tool and development server

### UI Framework
- **shadcn/ui**: Component library built on Radix UI primitives
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library

### Development Tools
- **ESLint**: Code linting with TypeScript and React plugins
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

### Additional Libraries
- **React Router DOM**: Client-side routing
- **React Query**: Data fetching and caching (setup for future use)
- **React Hook Form**: Form handling
- **Zod**: Runtime type validation

## Installation and Development

### Prerequisites
- Node.js 18+ or Bun
- npm, pnpm, or bun package manager

### Local Development

```bash
# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev

# Access the application
open http://localhost:8080
```

### Available Scripts

```bash
npm run dev          # Start development server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## Project Structure

```
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── CTASection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FeatureCards.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSectionTerminal.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TerminalLogo.tsx
│   │   ├── TerminalWindow.tsx
│   │   └── UseCasesSection.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Main landing page
│   │   └── NotFound.tsx   # 404 page
│   ├── App.tsx            # App component with providers
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json           # Dependencies and scripts
```

## Build and Deployment

### Build Process
- **Development**: `npm run dev` - Hot reload with Vite dev server
- **Production**: `npm run build` - Optimized build in `dist/` directory
- **Preview**: `npm run preview` - Preview production build locally

### Configuration
- **Vite**: React SWC plugin, path aliases, development server on port 8080
- **TypeScript**: Strict mode disabled for rapid development, path aliases configured
- **Tailwind**: Custom terminal theme colors and animations
- **ESLint**: React hooks, TypeScript, and React refresh rules

## Code Quality

### Linting and Formatting
- **ESLint** with TypeScript and React plugins
- React hooks rules enforced
- Unused variables warnings disabled for development flexibility

### Type Safety
- TypeScript configuration with relaxed strictness for rapid prototyping
- Path aliases configured (`@/*` → `./src/*`)

### Testing
- **Gap**: No testing framework currently configured
- **Recommendation**: Add Vitest + React Testing Library

## Risks and Considerations

### Security
- **Low Risk**: Static site with no sensitive data or authentication
- **Consideration**: Third-party CDN dependencies (fonts)

### Performance
- **Bundle Size**: Large number of UI components may impact initial load
- **Optimization**: Tree-shaking enabled, but unused components still bundled
- **Images**: Using SVG placeholders, real images needed for production

### Maintainability
- **TypeScript Strictness**: Relaxed settings may hide potential bugs
- **Component Coupling**: Some components tightly coupled to terminal theme
- **Testing Gap**: No automated testing coverage

### Technical Debt
- **Missing Tests**: No unit, integration, or e2e tests
- **Hardcoded Content**: All content is hardcoded in components
- **Accessibility**: May need audit for WCAG compliance
- **SEO**: Basic meta tags present but could be enhanced

## Recent Changes

The project has undergone significant recent development:

1. **Terminal UI Alignment** (Latest): Major refactor to align with terminal-inspired design
2. **Security Content**: Removed enterprise security claims and added clarifications
3. **Content Additions**: Initial landing page content implementation
4. **Foundation**: Tech stack setup with Vite + React + shadcn/ui

## Next Steps

### Immediate Priorities
1. **Add Testing**: Implement Vitest + React Testing Library
2. **Content Management**: Consider CMS integration for easier content updates
3. **Performance Optimization**: Analyze and optimize bundle size
4. **Accessibility Audit**: Ensure WCAG 2.1 AA compliance

### Future Enhancements
1. **Analytics**: Add tracking for user interactions
2. **SEO Optimization**: Enhanced meta tags, structured data
3. **Progressive Web App**: Add PWA capabilities
4. **Internationalization**: Multi-language support

### Questions for Team Discussion
1. **Content Management**: How frequently will content change? Should we integrate a headless CMS?
2. **Analytics**: What metrics are most important to track?
3. **Testing Strategy**: What level of test coverage is required?
4. **Deployment**: What is the preferred hosting/deployment strategy?
5. **Performance Budget**: What are the performance requirements (load time, bundle size)?

## Contributing

1. Follow the existing code style and component patterns
2. Use the established shadcn/ui component library
3. Maintain the terminal theme consistency
4. Run `npm run lint` before committing
5. Follow conventional commit format

## License

This project is private and proprietary to Twhisper.