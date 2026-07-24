# Backend Integration Guide

This document explains how the backend should integrate with the existing Bizula frontend.

---

# Frontend Architecture

The frontend is already fully structured.

The backend should NOT modify UI components unless absolutely necessary.

Most backend work should happen inside:

src/services/

and

src/contexts/

The pages and components should remain presentation layers.

---

# Folder Structure

src/

components/
layouts/
pages/
routes/
contexts/
hooks/
services/
lib/

---

# Where Authentication Lives

Authentication pages

src/pages/Auth/

Contains

Login.jsx

Register.jsx

Success.jsx

VerifyEmail.jsx

ForgotPassword.jsx

---

Authentication Components

src/components/auth/

Contains

forms/

shared/

These files are UI only.

Avoid editing these unless adding new UI.

---

Where Firebase Logic Should Go

Create

src/services/firebase/

Example

firebase.js

auth.js

firestore.js

storage.js

Example

src/services/firebase/auth.js

Responsibilities

Register User

Login User

Logout User

Google Login

Apple Login

Reset Password

Email Verification

Auth Listener

The UI should import these functions instead of calling Firebase directly.

---

Example

Register.jsx

Should NOT contain Firebase code.

Instead

import { registerUser } from "@/services/firebase/auth"

onSubmit(async () => {

await registerUser(form)

})

---

Context

Authentication state should be managed globally.

Create

src/contexts/AuthContext.jsx

Responsibilities

Current User

Loading

Login

Logout

Verification State

Business Type

Role

Dashboard pages should consume this context instead of calling Firebase repeatedly.

---

Protected Routes

Create

src/routes/ProtectedRoute.jsx

Responsibilities

Check authentication.

If no user

↓

redirect Login

If logged in

↓

render application

---

Role Routing

Business type determines visible modules.

Retail

Dashboard

Inventory

Sales

Customers

Payments

Settings

Service

Dashboard

Bookings

Services

Calendar

Customers

Payments

Settings

Both

Everything

Role should come from Firestore.

---

Firestore Structure

users

uid

name

email

businessName

businessType

verified

photoURL

createdAt

updatedAt

This document should be loaded after login.

---

Dashboard

Dashboard components are already built.

Backend should replace placeholder values.

Example

Revenue Widget

Currently

value="₦0"

Should become

value={dashboard.totalRevenue}

---

Bookings Widget

Current

0

Backend

dashboard.bookingsToday

---

Inventory Widget

dashboard.totalProducts

---

Customers Widget

dashboard.totalCustomers

---

Forms

Every form already has state.

Backend should only connect submit handlers.

Do NOT redesign forms.

---

Step One

Register

↓

Create Firebase Account

---

Step Two

↓

Save Business Type locally

---

Step Three

↓

Create Firestore document

↓

Send Email Verification

↓

Redirect Success Screen

---

Verify Email Screen

Responsibilities

Reload current user.

Check emailVerified.

If true

↓

Navigate Dashboard

Else

↓

Remain on Verify Email screen.

---

Forgot Password

Uses

sendPasswordResetEmail()

Firebase handles password reset.

Frontend only displays success message.

---

Orders

Not yet connected.

Backend should expose

/orders

Endpoints returning

Pending

Completed

Cancelled

Revenue

Transaction Fee

---

Inventory

Inventory module should update automatically after every sale.

Example

Nike Shoes

Stock

5

Customer purchases

1

↓

Firestore

stock = 4

↓

Dashboard updates automatically.

---

Bookings

Bookings should work similarly.

Customer opens public booking link.

↓

Books service.

↓

Booking document created.

↓

Dashboard updates automatically.

---

Public Order Link

Every Retail account receives a public storefront.

Example

bizula.app/store/{businessSlug}

Visitors can

Browse Products

Place Orders

Checkout

Each successful order deducts inventory automatically.

---

Public Booking Link

Every Service account receives

bizula.app/book/{businessSlug}

Visitors can

Browse Services

Book Appointment

Receive Confirmation

---

Payments

Every successful payment

↓

Transaction stored

↓

Dashboard updated

↓

Analytics recalculated

---

Development Rules

Keep business logic inside

services/

Keep authentication state inside

contexts/

Keep pages focused on rendering UI.

Avoid placing Firebase code directly inside components whenever possible.