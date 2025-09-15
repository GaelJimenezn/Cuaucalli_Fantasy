# Cuauhcalli Fantasy Event Website

## Overview

This is a comprehensive web application for "Cuauhcalli Fantasy," a multidisciplinary university event that combines art, technology, and fantasy gaming aesthetics. The platform serves as an information hub for students and visitors, featuring event details, contest information, activity schedules, galleries, and contact forms. Built as a modern single-page application with a fantasy-themed design approach that balances academic professionalism with creative expression.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing with support for both single-page navigation and dedicated gallery pages
- **Styling**: Tailwind CSS with custom design system implementation featuring fantasy-themed color palette and typography
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **State Management**: React Query (@tanstack/react-query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation schemas for type-safe form processing

### Design System
- **Typography**: Custom Google Fonts integration (Metamorphous for headings, Judson for body text)
- **Color Scheme**: University-branded palette with deep wine primary (#821A29), dark brown secondary (#561A22), orange accents (#F6B269), teal highlights (#71BEC6), and light bone backgrounds (#EADCD9)
- **Component Library**: Comprehensive UI system with cards, buttons, dialogs, tabs, and form components following consistent design patterns

### Backend Architecture
- **Framework**: Express.js with TypeScript for API layer
- **Architecture Pattern**: RESTful API design with modular route organization
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) for development, designed to be easily replaceable with persistent storage solutions

### Build System
- **Bundler**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement with Replit integration for live development
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Asset Handling**: Static asset serving with support for images and generated content

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema**: Basic user management with extensible table structure
- **Migrations**: Automated database migrations with drizzle-kit
- **Validation**: Zod schemas for runtime type validation and API contract enforcement

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **TypeScript**: Full TypeScript support with strict type checking
- **Vite**: Modern build tool with development server and production bundling

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Accessible component primitives for complex UI patterns
- **shadcn/ui**: Pre-built component library with consistent design system
- **Lucide React**: Icon library for consistent iconography

### Database and Backend
- **Neon Database**: Serverless PostgreSQL with @neondatabase/serverless driver
- **Drizzle ORM**: TypeScript ORM with schema management and query builder
- **Express.js**: Web server framework with middleware support
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Development Tools
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment integration with cartographer and error handling

### Email and Communication
- **SendGrid**: Email service integration (@sendgrid/mail) for contact forms and notifications

### Form and Validation
- **React Hook Form**: Form library with @hookform/resolvers for validation integration
- **Zod**: Schema validation for forms and API contracts
- **Class Variance Authority**: Utility for managing component variants and styles

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx & tailwind-merge**: CSS class management utilities
- **nanoid**: Unique ID generation for components and data