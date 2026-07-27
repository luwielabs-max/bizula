# Bizula

Bizula is a modern business operating system built with React and Vite.

## Mission

Provide one platform where retail and service businesses can manage daily operations.

---

# Architecture

Pages own all state.

Child components are presentational.

Business logic belongs in:

- src/data
- Page components

Child components never import the data layer.

---

# Folder Structure

src/

pages/
components/
data/
layouts/
routes/

---

# Component Pattern

Every dashboard module follows the same structure.

Example:

Inventory

Inventory.jsx
InventoryHeader
InventoryStats
InventoryFilters
InventoryTable
CreateProductDrawer
EditProductDrawer

Orders

Orders.jsx
OrderHeader
OrderStats
OrderFilters
OrderTable
CreateOrderDrawer
OrderDetailsDrawer

Sales

Sales.jsx
SalesHeader
SalesStats
SalesFilters
SalesTable
CreateSaleDrawer
SaleDetailsDrawer

---

# State Ownership

Pages own:

- useState
- useEffect
- refresh functions
- mutations

Components receive props only.

---

# Data Layer

The data layer simulates the backend.

Current modules:

inventory.js
orders.js
sales.js
services.js
bookings.js

Later these will become Firebase/API calls.

The API should remain the same.

---

# Retail Business Rules

Inventory owns stock.

Orders reserve stock.

Sales deduct stock.

Payments settle sales.

Dashboard displays live summaries.

Flow:

Inventory

↓

Orders

↓

Sales

↓

Payments

↓

Dashboard

---

# UI

Tailwind CSS

Lucide React

Luwie UI

Maintain the existing Bizula design language.

Never redesign components unless requested.

---

# Coding Standards

- Functional components
- React hooks
- Prop-driven architecture
- No duplicated state
- No duplicated business logic
- Keep components small
- Match Inventory architecture whenever possible

---

# Current Priority

1. Finish Orders

2. Finish Sales

3. Connect Inventory → Orders → Sales

4. Connect Backend

5. Polish