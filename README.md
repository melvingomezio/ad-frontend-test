# GameStore - Domain-Driven Clean Architecture

Game catalog application built with Next.js following Clean Architecture and Domain-Driven Design principles.

## Architecture

### Domain-Based Structure

```
src/app/
├── core/                    # Business Logic
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

## Features

- Game catalog with genre filters
- Pagination with "See More"
- Persistent cart in localStorage
- Responsive design with TailwindCSS
- Unit testing
- Page navigation
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
