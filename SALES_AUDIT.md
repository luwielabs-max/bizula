# Sales Module Audit

## Current State

- `src/pages/Dashboard/Sales.jsx` is currently a placeholder page with only a static heading.
- The Sales route is wired in `src/routes/AppRoutes.jsx` at `/dashboard/sales`, so the page is reachable.
- The Sales component folder exists with these files:
  - `src/components/sales/SalesHeader.jsx`
  - `src/components/sales/SalesStats.jsx`
  - `src/components/sales/SalesFilters.jsx`
  - `src/components/sales/SalesTable.jsx`
  - `src/components/sales/CreateSaleDrawer.jsx`
  - `src/components/sales/SaleDetailsDrawer.jsx`
- Those component files are currently empty, so the UI surface is not implemented.
- The sales data layer at `src/data/sales.js` has a basic in-memory implementation:
  - `getSales()` returns all sales
  - `getSaleById(id)` finds a sale
  - `createSale(sale)` deducts inventory stock and creates a completed sale record
  - `refundSale(id)` marks a sale as refunded

## What Works Today

- The sales data layer is available and already used by the Orders module.
- Orders completion flow calls `createSale(...)` when an order is completed, which means sales transactions can already be generated from the Orders workflow.
- Inventory integration exists within `createSale`, because it calls `deductStock(...)` and computes sale totals from product selling price.

## Missing Functionality

- The Sales page has no container-level state, no data loading, and no UI components to render sales.
- There is no implemented sales table or detail drawer to browse and inspect transactions.
- There is no manual sale creation flow in the UI, even though `createSale` exists.
- Sales filters, stats, and header actions are not implemented.
- There is no user-facing refund flow or confirmation UI, despite `refundSale` existing in the data layer.
- Sales records lack any linkage to order records or payment records, limiting cross-module visibility.
- Stock restoration on refund is missing; `refundSale` only changes status to `Refunded`.
- The sales domain is not yet aligned with the Inventory/Orders page module pattern used elsewhere.

## Architecture Observations

- The current Sales module is incomplete and inconsistent with the Inventory-style page/container/component architecture.
- Sales should be more than a static page; it should follow the established pattern:
  - page container owns state and data refresh
  - header component exposes primary actions
  - stats component summarizes revenue metrics
  - filters component controls search/status/payment filters
  - table component lists sales transactions
  - drawer components handle creation and details/actions
- The existing sales data layer indicates a business workflow where Sales is downstream of Orders.
- Because `createSale` already mutates inventory stock, Sales is tightly coupled to Inventory today. That coupling is acceptable for a mock prototype, but it should be formalized and consistent.
- The absence of customer, payment, and order linkage in the Sales model means the module cannot yet support realistic reporting or reconciliation.

## Risks and Technical Debt

- If Sales is built without linking to Orders and Payments, duplicate transaction data may emerge.
- The current `createSale` implementation makes Sales responsible for inventory deductions, which is a domain decision that would need review if Orders is the primary source of sales.
- Empty component files create maintenance risk; the module exists structurally but not functionally.
- Without shared entity models for customer and order data, Sales will remain isolated from other business domains.
- The in-memory data layer continues to be a mock-only implementation, so any UI work should keep in mind the eventual need to replace it with APIs.

## Recommended Implementation Roadmap

1. Scaffold the Sales page using the Inventory/Orders architecture pattern.
   - Create page-level state in `src/pages/Dashboard/Sales.jsx`.
   - Load sales from `getSales()` on mount and refresh after mutations.
   - Add local state for search, status, selected sale, create drawer open state, and any filter values.

2. Implement the core UI components.
   - `SalesHeader.jsx`: primary action to create a sale and optionally refresh data.
   - `SalesStats.jsx`: total revenue, count by status, best-selling products, and refund summary.
   - `SalesFilters.jsx`: search box, status filter, payment method filter, and date filter.
   - `SalesTable.jsx`: list sales rows with selection support.
   - `CreateSaleDrawer.jsx`: form for manual sale creation with customer, product, quantity, and payment method.
   - `SaleDetailsDrawer.jsx`: sale detail view with refund action and confirmation.

3. Build business actions and domain behavior.
   - Wire `createSale` for manual sales if that use case is desired.
   - Add `refundSale` action to the page container and refresh data after refund.
   - Consider restoring stock on refund or at least marking the refund reason in the sale record.
   - Add a sales status column with at least `Completed` and `Refunded`.

4. Align Sales with Orders and Payments.
   - Decide whether Sales should include an `orderId` reference for completed orders.
   - If so, update `createSale` or Orders completion flow to persist the order link.
   - Add payment method metadata for reporting and filtering.

5. Keep the page-container pattern consistent.
   - Avoid data module imports in child components.
   - Keep all business logic in `Sales.jsx` and use props for component communication.
   - Reuse shared domain data where possible (`src/data/inventory.js`, `src/data/orders.js`).

## Proposed Priorities

1. Implement the Sales page container and wire it into UI components.
2. Add a working sales table, filters, and details drawer.
3. Add manual sale creation and refund actions.
4. Add SalesStats and align metrics with business expectations.
5. Introduce cross-domain references to orders and payments for better reporting.

## Conclusion

The Sales module is structurally present in the codebase but functionally absent. Its data layer is partially built and already integrated by Orders, which is a good starting point. The next step should be a focused implementation of the Sales page container and UI, following the same architecture used by Inventory and Orders, while preserving the Sales domain as a downstream transaction log from completed orders.
