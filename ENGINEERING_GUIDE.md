# Bizula Engineering Guide

This document is the permanent engineering guide for Bizula. It is intended for human developers and AI agents joining the project so they can understand the architecture, conventions, and expected implementation patterns immediately.

## 1. Project Purpose

Bizula is a React-based business operating system for small businesses. It is currently implemented as a polished front-end prototype with mock data, but the architecture is structured so it can evolve into a real multi-domain SaaS application with backend APIs.

The application currently supports:

- Dashboard overview
- Inventory management
- Orders
- Sales
- Services
- Bookings
- Customers
- Payments
- Settings

## 2. Folder Structure

The source tree is organized by responsibility.

```text
src/
  App.jsx
  main.jsx
  index.css
  App.css
  components/
    auth/
    bookings/
    common/
    dashboard/
    inventory/
    landing/
    orders/
    sales/
    services/
  context/
  dashboard/
    configs/
    widgets/
  data/
  firebase/
  hooks/
  layouts/
  lib/
  luwie-ui/
  pages/
    Auth/
    Dashboard/
    Public/
  routes/
  services/
  sidebar/
  utils/
```

### Core directory responsibilities

- src/pages: route-level page containers for each domain.
- src/components: domain-specific presentational and interactive UI components.
- src/layouts: shared layout wrappers such as the dashboard shell.
- src/routes: routing definitions.
- src/data: mock in-memory data modules and domain helpers.
- src/services: app-level service modules and shared app state references.
- src/context: shared React context (currently lightweight, but intended to grow).
- src/dashboard/configs and src/dashboard/widgets: dashboard composition data and widget modules.
- src/sidebar: navigation configuration based on business type.
- src/utils: shared utility functions and validators.

## 3. Naming Conventions

Follow these conventions consistently.

### Files

- Use PascalCase for React component files.
- Use lowercase names for utility or data modules where appropriate.
- Match the domain in the file name whenever possible.

Examples:

- InventoryHeader.jsx
- CreateProductDrawer.jsx
- OrderTable.jsx
- DashboardLayout.jsx
- inventory.js
- orders.js

### Components

- Use descriptive PascalCase names.
- Prefix UI containers with the domain name when necessary.

Examples:

- InventoryHeader
- CreateProductDrawer
- EditServiceDrawer
- BookingDetailsDrawer

### Props

- Prefer descriptive prop names.
- For page-level containers, prefer names that reflect business meaning rather than generic names.

Examples:

- products, selectedProduct, onCreate, onUpdate, onDelete
- services, selectedService
- orders, selectedOrder

### State variables

- Use clear domain-specific names.
- Prefer `selectedX`, `isXOpen`, and `setX` patterns.

Examples:

- selectedProduct
- isCreateOpen
- selectedOrder

## 4. Component Architecture

Bizula uses a page-container + child-component architecture.

### Standard module shape

Each business module should follow this structure:

1. Page container owns state.
2. Page loads data on mount.
3. Page renders a header, stats, filters, table/list, and drawers.
4. Child components receive data and callbacks through props.
5. The page remains the owner of all business state.

### Recommended module composition

A typical module should contain:

- Page file in src/pages/Dashboard
- Header component
- Stats component
- Filters component
- Table/list component
- Create drawer
- Edit/details drawer

### Example module pattern

```text
Pages/
  Inventory.jsx
Components/
  inventory/
    InventoryHeader.jsx
    InventoryStats.jsx
    InventoryFilters.jsx
    InventoryTable.jsx
    CreateProductDrawer.jsx
    EditProductDrawer.jsx
```

The Inventory module is the best reference for this pattern.

## 5. State Ownership Rules

State ownership should remain simple and explicit.

### Rule 1: Page components own domain state

The page component should own the state that belongs to that module.

Examples:

- Inventory page owns products, filters, selected product, and drawer visibility.
- Services page owns services, selected service, and create/edit drawer state.
- Bookings page owns selected booking and drawer visibility state.

### Rule 2: Child components should be presentational when possible

Child components should receive props and emit callbacks. They should not own business data directly.

### Rule 3: Keep hierarchy shallow

Avoid passing state through too many layers. If a component needs a value, pass it from the page container directly.

### Rule 4: Keep UI state local

Drawer open/closed state, filter values, and selection state should generally stay in the page container.

### Rule 5: Do not place business logic inside child components

Business logic like CRUD actions, filtering, or business-rule evaluation should remain in the page or a shared service layer.

## 6. Data Layer Rules

The current data layer is intentionally simple and mock-based. It lives under src/data and uses in-memory arrays plus helper functions.

### Current pattern

Each domain module exposes functions such as:

- getX()
- createX()
- updateX()
- deleteX()

### Rules for working with the data layer

- Keep domain data modules under src/data.
- Do not import data modules directly inside child components.
- Page containers should be responsible for loading and refreshing data.
- Keep mutations centralized in the domain data module.
- Treat current data helpers as a temporary in-memory repository layer.

### Expected future evolution

The current data layer should eventually be replaced by:

- async service modules
- REST or GraphQL API clients
- backend repository abstractions
- shared domain services

The existing helper functions should be treated as the current contract for the future API layer.

## 7. Styling Rules

Bizula uses Tailwind CSS as the primary styling system.

### Styling principles

- Prefer utility classes over custom CSS when possible.
- Keep styling simple, consistent, and readable.
- Use neutral, modern dashboard styling.
- Favor uniform spacing, rounded corners, and border-based cards.
- Keep visual hierarchy clear and restrained.

### Common class patterns

- Page wrapper: space-y-10 or space-y-12
- Card surfaces: rounded-2xl border border-zinc-200 bg-white
- Muted text: text-zinc-500
- Section titles: text-xl font-semibold tracking-tight
- Page headings: text-3xl font-bold text-zinc-900

### Avoid

- Inline style objects for core layout.
- Large ad-hoc CSS blocks when Tailwind can express the same UI.
- Inconsistent spacing and border radius between modules.

## 8. Tailwind Usage

Tailwind is used as the main styling approach across the app.

### Recommended patterns

- Use responsive classes where appropriate.
- Prefer mobile-first patterns for layout transitions.
- Keep spacing and typography consistent with the existing modules.

### Example patterns

```jsx
<div className="space-y-10">
  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
    ...
  </div>
</div>
```

### UI consistency requirements

Any new UI work should feel visually aligned with the existing dashboard modules.

## 9. Drawer Pattern

Drawers are the standard interaction pattern for create, edit, and detail flows.

### Pattern expectations

- Use a drawer for create/edit/detail views.
- Keep draw open/closed state in the page container.
- Pass the current item and callbacks through props.
- Use a consistent close interaction.

### Typical drawer flow

- Create drawer opens from the header.
- Edit/details drawer opens when an item is selected.
- The page handles success and close behavior.

### Naming convention

- CreateProductDrawer
- EditProductDrawer
- OrderDetailsDrawer
- BookingDetailsDrawer

## 10. Table Pattern

Tables are the default list/detail view for most domain modules.

### Pattern expectations

- Use a bordered white table card container.
- Use a header row with muted text and clear column names.
- Make rows clickable when selecting an item.
- Use subtle hover states.
- Keep the page container responsible for the selected item state.

### Typical structure

- Outer container: rounded-2xl border border-zinc-200 bg-white
- Table with a clear header row
- Row click opens details or selection
- Status values use pill-style styling

## 11. Stats Pattern

Stats cards are used to summarize the state of a module.

### Pattern expectations

- Use a small summary grid of metric cards.
- Metrics should be driven from the current filtered or active dataset.
- Keep the cards simple and numeric where possible.
- Use consistent labels and values.

### Typical stats shape

- Total count
- Active count
- Pending count
- Low stock or similar domain-specific values
- Monetary summary when relevant

## 12. Filter Pattern

Filters should be owned by the page container, not by the table.

### Pattern expectations

- Place filters above the table in a white rounded container.
- Support text search, selects, and other simple controls.
- Keep filter state in the page container.
- Apply the filters in the page container so the table receives already-filtered data.

### Rule

The page should transform the raw data into the filtered view before passing it to the table.

## 13. CRUD Workflow

Crud flows should follow the same pattern across modules.

### Standard workflow

1. The page loads a list of records.
2. The user opens a create or edit drawer.
3. The page handles the submit action.
4. The page calls the data-layer mutation function.
5. The page refreshes the local list.
6. The page closes the relevant drawer.

### Expected behavior

- Create flows should create a new record and refresh the list.
- Update flows should update the record and refresh the list.
- Delete flows should remove the record and clear the current selection.

### Important rule

The child drawer should not independently manage CRUD persistence. The page container should orchestrate the workflow.

## 14. Retail Workflow

Retail mode should be treated as a business configuration that affects navigation, dashboard widgets, and domain experiences.

### Current pattern

The current user object in src/services/auth.js includes a business type:

- retail
- service

The app chooses the relevant navigation and dashboard config based on that value.

### Expected behavior for retail modules

- Inventory and orders are central.
- Sales and payments should be emphasized.
- Dashboard widgets should reflect retail-specific priorities.
- Retail navigation should surface the relevant modules.

## 15. Service Workflow

Service-mode workflows are slightly different from retail workflows.

### Current pattern

Service businesses rely more heavily on:

- Services
- Bookings
- Customers
- Payments

### Expected behavior for service modules

- Bookings should be a first-class domain.
- Services should be managed and attached to appointments.
- Dashboard widgets should reflect service-centric activity.
- Navigation should highlight booking and service-related modules.

## 16. Future Backend Integration

The current app is front-end-first, but the structure is already aligned with backend integration.

### Expected migration path

1. Keep the existing page-container architecture.
2. Replace the current in-memory data helpers with async service modules.
3. Move business logic into services or repository modules.
4. Introduce API endpoints for each domain.
5. Keep page components responsible for UI state and user interaction.
6. Keep the current component and module structure intact during migration.

### Integration rule

The UI should not directly depend on the implementation detail of the data source. The page should continue to interact with a service abstraction regardless of whether it is mock data or a backend API.

## 17. Code Review Checklist

Use this checklist for all changes in Bizula.

### Architecture

- Does the change follow the page-container + child-component pattern?
- Is the state owned by the correct layer?
- Are business rules kept out of presentational components?

### Data flow

- Is data loaded and refreshed from the page container?
- Are child components receiving props instead of importing data modules directly?
- Does the change preserve the existing data-layer contract?

### UI consistency

- Does the change use the existing Tailwind styling patterns?
- Does it follow the rounded card, border, and spacing conventions?
- Does it feel consistent with the inventory and dashboard modules?

### Naming and structure

- Are names descriptive and aligned with the existing conventions?
- Is the file placed in the correct folder?
- Are props and state names clear and domain-specific?

### Business logic

- Does the change respect the current business-domain boundaries?
- Are inventory, orders, bookings, services, and payments treated as separate but connected domains?

### Future readiness

- Would this change be easy to replace with API-backed services later?
- Does the implementation avoid hard-coding behavior that should belong in a service layer?

## 18. Practical Guidance for Future AI Agents

When contributing to Bizula:

- Start by reading the relevant page, its sibling modules, and the data module for that domain.
- Follow the Inventory module as the architectural reference.
- Keep state local to the page unless a true shared state need emerges.
- Use props for data flow.
- Preserve the existing dashboard visual language.
- Avoid introducing new patterns that conflict with the current structure.

The goal is to preserve a clean, modular, and scalable architecture while keeping the product polished and consistent.
