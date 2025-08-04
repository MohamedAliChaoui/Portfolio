# Replit Project: Portfolio Website

## Overview

This is a modern, full-stack portfolio website application built with Express.js backend and React frontend. The application showcases a developer's professional profile with sections for personal information, skills, projects, and contact functionality. It features a bilingual interface (French/English) with dark/light theme support and a comprehensive UI component library using shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Uses Wouter for client-side routing with simple route definitions
- **State Management**: React Query (TanStack Query) for server state management
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Language Support**: Custom hook-based internationalization system supporting French and English
- **Theme System**: Custom theme provider supporting light/dark modes with system preference detection

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Custom Vite integration for hot reloading in development
- **API Structure**: RESTful endpoints under `/api` prefix
- **Error Handling**: Centralized error middleware with structured JSON responses
- **Logging**: Custom request logging middleware for API endpoints
- **Static Files**: Serves built React application in production

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Database Connection**: Neon Database serverless PostgreSQL adapter

### Authentication & Authorization
- **User Management**: Basic user schema with username/password fields
- **Storage Interface**: Abstracted storage layer with CRUD operations
- **Password Handling**: Currently basic implementation (ready for enhancement)

### Component Architecture
- **UI Components**: Comprehensive set of reusable components from shadcn/ui
- **Layout Components**: Modular sections (Hero, About, Skills, Projects, Contact, Footer)
- **Form Handling**: React Hook Form integration with Zod validation
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive design

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Development Experience**: Runtime error overlay and hot module replacement
- **Path Aliases**: Configured path mapping for clean imports

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom theming
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for managing component variants

### Development and Build Tools
- **Vite**: Fast build tool with React plugin support
- **TypeScript**: Static type checking and enhanced development experience
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### State Management and Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Performant form handling with validation
- **Zod**: Schema validation for form data and API responses

### Routing and Navigation
- **Wouter**: Lightweight client-side routing solution
- **Smooth Scrolling**: Custom scroll behavior for single-page navigation

### Replit Integration
- **Replit Vite Plugins**: Development banner and cartographer for Replit environment
- **Runtime Error Modal**: Enhanced error display in development