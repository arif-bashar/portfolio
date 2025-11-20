# Portfolio - Next.js

## Overview

This is a modern portfolio website built with Next.js 14, featuring smooth GSAP animations, a custom cursor system, and a clean sectioned layout. The site showcases professional experience, projects, and skills through an interactive single-page application with an animated intro screen.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 14 with App Router**: Modern React framework using the app directory structure
- **TypeScript**: Full type safety throughout the application
- **React 19**: Latest React features with client-side interactivity

### Styling Architecture
- **CSS Modules with SCSS**: Component-scoped styles to prevent naming conflicts
  - Each component has its own `.module.scss` file
  - Shared variables in `styles/variables/` (colors, typography)
  - Global styles limited to base elements (html, body, typography) in `styles/global/`
  - Shared section styles in `styles/modules/sections.module.scss`
- **Rationale**: CSS Modules provide scoping and maintainability while SCSS offers variables and nesting. This approach eliminates global style conflicts and improves code organization.
- **Breakpoints**: Custom SCSS mixins for responsive design (referenced but not shown in files)

### Animation System
- **GSAP (GreenSock Animation Platform)**: Professional-grade animation library
  - `@gsap/react` hooks for React integration (`useGSAP`)
  - ScrollTrigger plugin for scroll-based animations
  - Custom animations in `animations/` directory
- **Custom Cursor**: Client-side mouse tracking with visual feedback states (grow on hover)
- **Intro Screen**: Complex timeline animation with droplet effect before main content loads

### Component Structure
- **Layout Components**: Header (with scroll behavior), Footer, Layout wrapper
- **Section Components**: Modular page sections (Welcome, About, Experience, Projects)
- **UI Components**: Reusable elements (MenuButton, SectionNumber, Tag)
- **SVG Icons**: Inline SVG components for better control and performance

### State Management
- **Local Component State**: Uses React hooks (useState, useRef, useEffect)
- **No Global State Library**: Simple application doesn't require Redux/Context
- **Refs for DOM Access**: GSAP animations require direct DOM manipulation via refs

### Routing
- **Single Page Application**: Main content on root route (`/`) with hash navigation for sections
- **Custom 404 Page**: Minimal not-found handler
- **Client-Side Only**: All interactivity requires JavaScript (marked with "use client")

### Performance Considerations
- **SSR with Client Hydration**: Next.js 14 handles server rendering
- **Conditional Mounting**: Home page checks mounted state to prevent hydration mismatches
- **Intro Screen Gate**: Delays main layout rendering until intro animation completes
- **CSS Modules Tree Shaking**: Unused styles removed at build time

### Development Workflow
- **Dev Server**: Runs on port 5000, accessible on all network interfaces (0.0.0.0)
- **Hot Module Replacement**: Next.js built-in development features
- **TypeScript Strict Mode**: Enabled for maximum type safety

## External Dependencies

### Core Framework
- **next** (^16.0.3): React framework for production
- **react** (^19.2.0): UI library
- **react-dom** (^19.2.0): React renderer for web

### Animation
- **gsap** (^3.12.5): Animation library
- **@gsap/react** (^2.1.1): React-specific GSAP hooks and utilities

### Utilities
- **classnames** (^2.5.1): Conditional className joining utility

### Development
- **typescript** (^5.4.5): Type checking and compilation
- **sass** (^1.77.0): SCSS preprocessing
- **@types/node**, **@types/react**, **@types/react-dom**: TypeScript definitions

### Build & Hosting
- Designed for deployment on platforms like Vercel (Next.js native)
- Static asset optimization through Next.js Image component
- No database or backend API dependencies
- No authentication system (static portfolio site)