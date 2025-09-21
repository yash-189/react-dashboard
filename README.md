# Modern React Dashboard

A modern, responsive admin dashboard built with React, implementing a micro-component architecture and layer-based folder structure. The project showcases best practices in component organization, state management, and UI development using Shadcn UI and TailwindCSS.

## Architecture Overview

### Micro-Component Architecture
The project follows a micro-component architecture pattern where components are broken down into smallest possible logical units. This approach offers:
- High reusability
- Easier testing and maintenance
- Clear separation of concerns
- Better code organization
- Simplified state management

### Layer-Based Folder Structure
The application is organized in a layer-based structure:
1. **Presentation Layer** (`components/`)
   - UI components (shadcn/ui)
   - Layout components
   - Chart components
   - Shared components
2. **Business Logic Layer** (`hooks/`, `contexts/`)
   - Custom hooks for business logic
   - Context providers for state management
3. **Data Layer** (`api/`, `data/`)
   - API integration
   - Mock data management
4. **Configuration Layer** (`config/`)
   - Constants
   - Navigation configuration
   - Query client setup

## Features

### Interactive Data Visualization
- Bar Charts - Revenue analysis and comparison
- Line Charts - Trend analysis and projections
- Pie Charts - Distribution analysis
- World Map - Geographic data visualization
- Revenue projections with dynamic data updates

### Modern UI Components (Shadcn/UI)
- Component-driven development approach
- Consistent design language
- Accessible by default
- Theme customization
- Dark mode support

### Data Management
- Server-side pagination implementation
- Advanced data table features
  - Custom column rendering
  - Sorting capabilities
  - Filter implementation
  - Loading states
  - Error boundaries
  - Empty state handling

### Application Routes
- `/` - Main dashboard with analytics overview
- `/ecommerce/orders` - Order management interface

## Tech Stack

- **React 18** - Frontend library with hooks and concurrent features
- **Vite** - Next-generation frontend tooling
- **Shadcn/UI** - High-quality, accessible component library
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** (Partial) - Static typing for enhanced development
- **ESLint** - Code quality and consistency
- **React Query** - Server state management
- **React Router v6** - Client-side routing

## Project Structure and Code Organization

```
src/
├── api/                    # API integration layer
│   ├── dashboard.js       # Dashboard-specific API calls
│   └── orders.js         # Order management API calls
├── components/            # Reusable UI components
│   ├── charts/           # Data visualization components
│   │   ├── bar-chart.tsx
│   │   ├── line-chart.tsx
│   │   ├── pie-chart.tsx
│   │   └── world-map.tsx
│   ├── dashboard/        # Dashboard-specific components
│   │   ├── MetricCard.jsx
│   │   ├── ProjectionChart.jsx
│   │   ├── RevenueChart.jsx
│   │   └── TopSellingProducts.jsx
│   ├── layout/          # Core layout components
│   ├── shared/          # Shared utility components
│   └── ui/             # Shadcn UI components
├── config/              # Configuration and constants
├── contexts/            # React context providers
├── hooks/              # Custom React hooks
└── pages/              # Page components
    ├── Dashboard.jsx   # Main dashboard view
    └── Orders.jsx      # Order management view
```

### Key Architectural Decisions

1. **Component Organization**
   - Atomic design principles for UI components
   - Feature-based grouping for business logic
   - Shared components for cross-cutting concerns
   - Clear separation between UI and business logic

2. **State Management**
   - React Query for server state
   - Context API for global UI state
   - Local state for component-specific data
   - Custom hooks for shared business logic

3. **Code Reusability**
   - Micro-components for maximum reuse
   - Utility-first CSS with TailwindCSS
   - Shared hooks for common functionality
   - Common layouts and templates

4. **Performance Considerations**
   - Code splitting with React.lazy
   - Dynamic imports for routes
   - Memoization where beneficial
   - Optimized bundle size

## Getting Started

1. Clone the repository

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Access the application:
   - Dashboard: http://localhost:5173/
   - Orders: http://localhost:5173/ecommerce/orders

## Development Workflow

### Component Development
1. Create new components in appropriate directories based on their purpose
2. Follow the micro-component architecture principles
3. Implement Shadcn UI components for consistent design
4. Style using TailwindCSS utility classes

### Adding New Features
1. Create necessary API endpoints in `api/`
2. Implement required UI components
3. Add business logic in custom hooks
4. Update routes if needed
5. Add configuration constants

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Configuration Files

- `vite.config.js` - Vite bundler configuration
- `tailwind.config.js` - TailwindCSS customization
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules and plugins
- `components.json` - Shadcn UI components configuration

## Best Practices

1. **Component Development**
   - Keep components small and focused
   - Use TypeScript for complex components
   - Implement proper prop validation
   - Follow consistent naming conventions

2. **State Management**
   - Use appropriate state management based on scope
   - Implement proper loading and error states
   - Cache API responses effectively
   - Handle side effects consistently

3. **Styling**
   - Use TailwindCSS utility classes
   - Follow mobile-first approach
   - Maintain consistent spacing
   - Use Shadcn UI theming system

4. **Performance**
   - Implement proper code splitting
   - Optimize component renders
   - Handle data fetching efficiently
   - Use appropriate caching strategies

## License

MIT
