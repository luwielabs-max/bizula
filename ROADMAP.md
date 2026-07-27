# Bizula Product Roadmap

This roadmap prioritizes the remaining work needed to evolve Bizula from a polished frontend prototype into a complete business operating system.

The milestones below are ordered to deliver the highest-value functionality first while reinforcing the existing architecture and reducing rework.

---

## Milestone 1: Inventory

### Goal
Complete the Inventory module as the core operational foundation of the product.

### Dependencies
- Existing Inventory page architecture
- Inventory data layer
- Product CRUD flow
- Stock and status logic

### Deliverables
- Finish the inventory create/edit/delete workflow end to end
- Ensure filters, stats, and table views stay in sync
- Refine low-stock, out-of-stock, and reserved-stock calculations
- Improve product form validation and empty states
- Standardize inventory component props and behavior with the rest of the app

### Success Criteria
- Inventory can be created, edited, and deleted reliably
- Stock and status logic behave consistently
- The module is stable enough to serve as the blueprint for other domains

---

## Milestone 2: Orders

### Goal
Turn Orders into a fully functional workflow that integrates with inventory and supports downstream business processes.

### Dependencies
- Inventory module completion
- Order data helpers
- Order UI components
- Business rules around commitment, balance, and fulfillment

### Deliverables
- Implement the Orders page fully using the Inventory pattern
- Build header, stats, filters, table, create drawer, and details drawer
- Add order creation and status handling
- Connect orders to inventory reservation and stock movement logic
- Define order lifecycle states such as Pending, Confirmed, Completed, and Cancelled

### Success Criteria
- Orders can be created and tracked from start to finish
- Inventory reservation and release behavior is consistent
- The Orders module is usable as a real operational workflow

---

## Milestone 3: Sales

### Goal
Establish a clear sales view that summarizes revenue activity and connects transactions to the rest of the business system.

### Dependencies
- Orders module completion
- Inventory and payment concepts
- Dashboard widget structure

### Deliverables
- Build the Sales module around real transaction data flow
- Define sales summaries, performance metrics, and list views
- Connect sales data to completed orders and payments where appropriate
- Add basic reporting views and status breakdowns

### Success Criteria
- Sales can be viewed and understood at a glance
- The module reflects actual business activity rather than static placeholders
- It integrates with the broader order-to-payment workflow

---

## Milestone 4: Payments

### Goal
Introduce a reliable payments workflow for commitments, balances, and settlements.

### Dependencies
- Orders module completion
- Sales module structure
- Business rules for payment status and balance calculation

### Deliverables
- Implement a Payments module with payment records and statuses
- Define payment lifecycle states such as Pending, Partial, Paid, and Overdue
- Connect payments to orders and invoices where relevant
- Add payment summaries and status-based views

### Success Criteria
- Payments can be tracked clearly and consistently
- Order balance and payment status are understandable in the UI
- The module supports future integration with accounting and gateway workflows

---

## Milestone 5: Customers

### Goal
Create a reusable customer domain that connects to orders, bookings, payments, and services.

### Dependencies
- Orders and payments domain model
- Service and booking concepts
- Shared business identity structure

### Deliverables
- Implement a Customers module with list, details, and profile views
- Link customers to orders, bookings, and payments
- Add customer-level history and summary views
- Define shared customer data rules for reuse across modules

### Success Criteria
- Customers can be managed as a first-class business entity
- Cross-module customer relationships are clear and consistent
- Customer data can be reused by other workflows without duplication

---

## Milestone 6: Backend Integration

### Goal
Replace the current mock data layer with a real backend-backed service layer.

### Dependencies
- Stable domain modules
- Clear service contracts
- Authentication and data access strategy

### Deliverables
- Introduce a formal service layer for each domain
- Replace in-memory data helpers with API-backed integrations
- Add loading, error, and empty states for network-driven data
- Define authentication and authorization boundaries
- Migrate one domain at a time to the new service architecture

### Success Criteria
- The app can load and mutate data from an external backend
- The UI remains consistent while the persistence layer changes
- The architecture is ready for production-grade scaling

---

## Milestone 7: Reports

### Goal
Provide structured reports for business operations and decision making.

### Dependencies
- Sales, payments, inventory, and orders data availability
- Backend integration or stabilized mock data pipelines

### Deliverables
- Create report views for inventory, sales, payments, and orders
- Add summary tables and export-friendly formats where relevant
- Define recurring report categories for operators and managers
- Ensure reports are based on consistent domain data

### Success Criteria
- Users can review business performance through dedicated reports
- Reports are understandable and consistent with the dashboard design system
- Report views can be expanded into richer analytics later

---

## Milestone 8: Analytics

### Goal
Move from operational screens to insight-driven dashboards and trend analysis.

### Dependencies
- Backend integration
- Stable reporting data model
- Historical data availability

### Deliverables
- Add chart-based analytics and trend views
- Introduce dashboard sections for growth, revenue, stock health, and service performance
- Support time-based comparisons and summaries
- Refine the dashboard into a true business intelligence surface

### Success Criteria
- The dashboard offers meaningful analytics, not just static cards
- Users can identify trends and operational issues quickly
- The product feels like a complete business intelligence platform

---

## Recommended Execution Order

The roadmap should be executed in the following order:

1. Inventory
2. Orders
3. Sales
4. Payments
5. Customers
6. Backend Integration
7. Reports
8. Analytics

This order prioritizes the domains that establish the core business workflow first, then expands outward into reporting and analytics once the foundation is stable.
