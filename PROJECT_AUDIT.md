# Overall Architecture

This application is a React + Vite dashboard-style business operating system for a retail or service business. It is organized around route-driven pages, with a nested dashboard shell and a set of domain modules that mirror one another structurally.

The main architectural layers are:

- App shell and routing: the entry point is the Vite React app, with route definitions in src/routes/AppRoutes.jsx.
- Layouts: dashboard-specific layout and shell behavior live in src/layouts/DashboardLayout.jsx.
- Pages: domain pages such as Inventory, Services, Bookings, Dashboard, Orders, Sales, Customers, Payments, and Settings live under src/pages/Dashboard.
- Components: reusable UI pieces are grouped by domain under src/components, with dashboard widgets and shared UI living in dedicated subfolders.
- Data layer: mock/in-memory domain data is stored in src/data and exposed through simple CRUD-style functions.
- Services and context: app-wide demo state such as the current user is currently represented by a simple exported object in src/services/auth.js rather than a full context provider.
- Navigation and configuration: sidebar labels and dashboard widgets are driven by config modules under src/sidebar and src/dashboard/configs.

The overall pattern is a lightweight, front-end-first architecture: route -> page container -> domain components -> data functions. It is designed to look like a real business app, but today it is still a mock-data prototype rather than a fully connected backend-driven system.

# Design System

The UI uses a consistent modern dashboard language built on Tailwind CSS and a small internal UI library under src/luwie-ui.

Visual characteristics include:

- Neutral, calm palette centered on zinc/stone tones with black text and subtle borders.
- Rounded surfaces using classes like rounded-2xl, rounded-xl, and soft card containers.
- Clear spacing and sectioning using space-y-10 and space-y-12 patterns.
- Strong typography hierarchy with bold page titles, medium-weight section headings, and muted supporting copy.
- Card-based layout for overview and analytics surfaces.
- Lucide icons for navigation, action buttons, and module illustrations.
- Small motion details via Framer Motion for hover and tap interactions in dashboard cards.

The app favors a polished “SaaS dashboard” look rather than a traditional form-heavy admin UI. Buttons, cards, and drawers are visually simple and consistent, which makes the interface feel cohesive even though the underlying data layer is still mocked.

# Component Pattern

Dashboard modules are generally built with the same structural pattern:

1. A page container owns the module-level state.
2. The page loads data on mount with useEffect.
3. The page renders a top-level section composed of a header, stats, filters, a table or list, and one or more drawers.
4. Child components receive data and callbacks through props.
5. The module behaves like a data-driven view rather than a fully reusable component framework.

The Inventory module is the clearest example of this pattern. It is composed of:

- Inventory page container
- InventoryHeader
- InventoryStats
- InventoryFilters
- InventoryTable
- CreateProductDrawer
- EditProductDrawer

This same module structure is intended to be reused for Services, Orders, Bookings, and other domain pages. The current implementation is strongest in Inventory and Services, while Orders and some other modules are still partly scaffolded or inconsistent.

# State Management

State is mostly local to each page component. This is the dominant pattern in the project.

Examples:

- Inventory owns search, category, status, selected product, create drawer state, and the products list.
- Services owns selected service, create drawer state, and the services list.
- Bookings owns selected booking and drawer visibility state.
- Dashboard derives its view from the current user and configuration modules rather than local UI state.
- The dashboard layout owns the sidebar open/closed state.

There is no broad React context or Redux store in place. State ownership is intentionally simple and page-local, which is appropriate for this early-stage prototype. The tradeoff is that shared state and cross-module coordination are not yet formalized.

The current user is represented as a single exported object from src/services/auth.js, which acts as a lightweight global demo source. This is sufficient for the current UI but would need to become a real auth context if the app evolves.

# Data Layer

The current data layer lives entirely in the front end. Domain data files under src/data provide mock arrays and helper functions:

- src/data/inventory.js
- src/data/orders.js
- src/data/services.js
- src/data/bookings.js
- src/data/sales.js
- src/data/auth/

These modules expose functions such as get*, create*, update*, delete*, and in some cases domain-specific actions like reserveStock, deductStock, and confirmOrder. The data is kept in memory and mutated in place through module-level arrays.

This design is intentionally simple and good for prototyping, but it creates a few important implications:

- Data is not persisted across refreshes.
- Modules are coupled through shared business logic.
- Domain operations are implemented in the front-end data layer rather than via API services.
- The app is effectively simulating a backend with a local in-memory store.

The intended direction is clearly toward backend APIs: the current helper functions look like a pre-API contract for services that will eventually be replaced by async API requests and server-side persistence.

# Business Domains

The application is organized around a small set of business domains that should work together as one operating system.

- Inventory
  - Manages products, stock levels, reserved stock, low-stock state, and product status.
  - This is the most mature domain and acts as the foundation for stock-aware workflows.

- Orders
  - Represents customer purchase commitments tied to inventory.
  - Orders should consume inventory state through reservation and fulfillment logic.
  - They are conceptually downstream of inventory and upstream of payments and fulfillment.

- Sales
  - Likely intended to summarize revenue and transaction activity.
  - It should aggregate from orders and payments rather than maintain independent state.

- Services
  - Represents service offerings that customers can book.
  - It should be able to power the bookings and appointments module.

- Bookings
  - Represents appointments or service bookings tied to services and customers.
  - It should be able to work alongside services and payments, even if it is currently more static than the inventory flow.

- Customers
  - Should be the shared identity layer for orders, bookings, and payments.
  - Customer records should be reusable across domains rather than duplicated in each module.

- Payments
  - Should track payment obligations and statuses for orders, services, and bookings.
  - It should connect to the business rules around commitment fees, balances, and completed transactions.

In a well-structured version of this app, these domains would interact through a shared business workflow:

- A customer places an order or books a service.
- Inventory or service availability is checked.
- A commitment/payment status is updated.
- The record becomes visible in the dashboard, orders, bookings, and payments views.

# Existing Patterns Worth Reusing

The Inventory module should be treated as the current architectural blueprint for new domain modules.

Why Inventory is the best reference:

- It has the clearest page-level state ownership.
- It demonstrates the page -> header/stats/filters/table/drawer pattern well.
- It uses a data layer with explicit CRUD helpers.
- It shows how child components should receive props rather than reaching into data modules directly.
- It is the most complete example of the app’s intended modular approach.

Other patterns worth reusing:

- Dashboard widget composition through config arrays.
- Sidebar generation through domain-specific config files.
- The use of consistent section wrappers and spacing across modules.
- The use of the internal UI primitives such as LCard, LButton, and LAvatar.

# Technical Debt

Several inconsistencies and gaps are visible across the codebase:

- The Orders module is partially scaffolded but its child components are empty, so the architecture exists without the full UI implementation.
- Some modules are more complete than others; Inventory and Services are mature, while Orders, Sales, Customers, and Payments are less developed.
- The app uses mock data heavily, but the UI is already structured as though real backend services will exist.
- State ownership is local and simple, but there is no shared domain state or service abstraction yet.
- The data layer mixes domain logic and persistence concerns in the same module, which makes it harder to evolve into APIs.
- There is some inconsistency in naming and prop conventions from one page to the next.
- The current user is modeled as a plain exported object instead of a proper auth context.
- Some components are presentational and some are container-like, but the boundary is not always explicit.
- The app is visually cohesive, but the business workflows are still not fully connected across modules.

# Recommendations

The application is already structured well enough to scale, but it would benefit from a more formalized architecture before adding more features.

Recommended next steps:

- Standardize the page-module pattern across all business domains using Inventory as the reference model.
- Introduce a real service layer that wraps the current data functions and eventually replaces them with API calls.
- Define a shared contract for module props so every page uses a consistent shape for headers, filters, tables, and drawers.
- Move currentUser and other global app state into a proper context provider.
- Separate presentational components from container components more explicitly.
- Create a single source of truth for shared entities such as customers, orders, bookings, and payments.
- Evolve the in-memory data layer into a proper repository pattern that can later be swapped for a backend.
- Add a stronger domain model around inventory, reservations, commitments, balances, and payment statuses so the modules behave consistently.

Overall, the project has a promising structure and a clear visual language. Its main opportunity is not visual design but architectural maturity: formalizing state ownership, data contracts, and domain boundaries will make it much easier to evolve the app from a polished mockup into a real business platform.
