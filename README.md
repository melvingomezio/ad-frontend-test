# GamerShop - Domain-Driven Clean Architecture

Game catalog application built with Next.js following Clean Architecture and Domain-Driven Design principles.

## Tech Stack

### Core Technologies
- **Next.js 15.5** - React framework with App Router and Turbopack
- **React 19** - UI library with latest features
- **TypeScript 5.9** - Type safety and developer experience
- **TailwindCSS 4.1** - Utility-first CSS framework

### Development & Testing
- **Jest 30** - Testing framework with 95% coverage requirement
- **Testing Library** - React component testing utilities
- **ESLint 9** - Code linting and quality
- **Husky** - Git hooks for code quality

### Infrastructure
- **Environment Variables** - Configurable API endpoints
- **GitHub Actions** - CI/CD pipeline
- **Vercel** - Deployment platform

## Architecture

### Domain-Based Structure

```
src/app/
├── core/                    # Business Logic
│   ├── shared/             # Shared constants (API_URL)
│   ├── catalog/            # Catalog Domain
│   │   ├── application/    # Use cases
│   │   ├── domain/        # Entities and types
│   │   └── infrastructure/ # Services and interfaces
│   └── cart/              # Cart Domain
│       ├── application/   # Use cases
│       ├── domain/       # Entities and types
│       └── infrastructure/ # Services and interfaces
└── journeys/              # User Journeys (UI)
    ├── shared/           # Shared components
    ├── catalog/          # Catalog journey
    └── cart/            # Cart journey
```

### Implemented Principles

- **Clean Architecture**: Layer separation with inward dependencies
- **Domain-Driven Design**: Organization by business domains
- **Functional Programming**: Use cases as pure functions
- **Atomic Design**: Components organized by complexity
- **Environment Configuration**: Configurable API endpoints

## Problem Breakdown Strategy

### Phase 1: Foundation
- **Issue #1**: Project setup with Next.js, TypeScript, and TailwindCSS
- **Issue #2**: Clean Architecture folder structure implementation
- **Issue #3**: Environment variables configuration for API endpoints

### Phase 2: Deployment Setup
- **Issue #4**: GitHub Actions CI/CD pipeline
- **Issue #5**: Vercel deployment configuration
- **Issue #6**: Production environment variables

### Phase 3: Core Domain
- **Issue #7**: Game catalog domain entities and types
- **Issue #8**: Catalog use cases (get games, filter by genre)
- **Issue #9**: API service layer with fetch implementation
- **Issue #10**: Mock API endpoints for development

### Phase 4: UI Components
- **Issue #11**: Atomic design system (atoms, molecules, organisms)
- **Issue #12**: Game card component with responsive design
- **Issue #13**: Filter dropdown and pagination components
- **Issue #14**: Layout and navigation structure

### Phase 5: Features
- **Issue #15**: Catalog screen with genre filtering
- **Issue #16**: Pagination with "See More" functionality
- **Issue #17**: Cart domain and persistent storage
- **Issue #18**: Cart screen and item management

### Phase 6: Quality Assurance
- **Issue #19**: Unit tests for all components and services
- **Issue #20**: Integration tests for user journeys
- **Issue #21**: Code coverage enforcement (95% minimum)
- **Issue #22**: ESLint configuration and Git hooks

## Features

- Game catalog with genre filters
- Pagination with "See More"
- Persistent cart in localStorage
- Responsive design with TailwindCSS
- Environment-based API configuration
- Comprehensive unit testing
- CI/CD with GitHub Actions

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Testing

```bash
npm test
```

The test suite maintains a minimum coverage of 95% across all code, ensuring high code quality and reliability.

## CI/CD Pipeline

The application uses GitHub Actions for continuous integration and deployment:

- **Automated Testing**: Runs unit tests on every push and pull request
- **Code Quality**: Linting and type checking
- **Automatic Deployment**: Deploys to Vercel on successful builds

Workflow configuration can be found in `.github/workflows/deploy.yml`.

## Deployment

Deploy on [Vercel](https://vercel.com/new) by connecting your GitHub repository. The CI/CD pipeline will automatically handle deployments on push to main branch.
