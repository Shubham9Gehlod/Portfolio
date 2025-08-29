# Overview

This is a personal portfolio website built as a full-stack application showcasing a developer's work, skills, and experience. The application features a modern, animated React frontend with a contact form functionality and resume download capability, backed by an Express.js server with PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod schema validation for type-safe form processing

## Backend Architecture
- **Server Framework**: Express.js with TypeScript for API endpoints and file serving
- **Development Setup**: Vite for hot module replacement and development server integration
- **File Handling**: Static file serving for resume downloads and assets
- **API Design**: RESTful endpoints for contact form submission and file downloads

## Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless database for scalable cloud hosting
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: User authentication tables and contact form submission storage
- **Migrations**: Drizzle Kit for database schema versioning and deployment

## Authentication and Authorization
- **Current State**: Basic user schema defined but not actively implemented
- **Prepared Infrastructure**: User table with username/password fields ready for future auth implementation
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage when needed

## Component Architecture
- **Design System**: shadcn/ui component library providing consistent, accessible UI components
- **Layout Structure**: Modular section-based components (Hero, About, Skills, Projects, Experience, Contact)
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Radix UI primitives ensuring WCAG compliance and keyboard navigation

## Development Workflow
- **Build Process**: Vite for frontend bundling, esbuild for server-side compilation
- **Type Safety**: Shared TypeScript schemas between frontend and backend
- **Development Server**: Integrated Vite dev server with Express for full-stack development
- **Asset Management**: Vite asset pipeline with optimized imports and bundling

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect

## UI and Design Libraries
- **shadcn/ui**: Pre-built React components with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Radix UI**: Headless component library for accessibility and customization
- **Framer Motion**: Animation library for smooth transitions and interactions

## Development Tools
- **Vite**: Frontend build tool with hot module replacement
- **TypeScript**: Static type checking for both frontend and backend
- **React Hook Form**: Form state management with validation
- **TanStack Query**: Server state synchronization and caching

## Fonts and Assets
- **Google Fonts**: Custom font loading for typography (Inter, Orbitron, DM Sans, etc.)
- **Font Awesome**: Icon library for consistent iconography
- **Unsplash**: External image service for placeholder and design images

## Validation and Utilities
- **Zod**: Runtime type validation for forms and API data
- **date-fns**: Date manipulation and formatting utilities
- **clsx/tailwind-merge**: Conditional CSS class management