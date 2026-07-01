# Authentication

Bizula uses Firebase Authentication.

Supported Providers

- Email & Password
- Google
- Apple

---

## Authentication Flow

Landing

↓

Register

↓

Step 1

↓

Step 2

↓

Step 3

↓

Success

↓

Verify Email

↓

Dashboard

---

## Registration

### Step 1

Collects

- Full Name
- Email
- Password

Validation

- Valid Email
- Password Minimum Length
- Required Fields

---

### Step 2

Collects

Business Type

- Retail
- Service
- Both

---

### Step 3

Collects

- Business Name

---

## Success Screen

Displayed after registration.

Redirects user to Verify Email.

---

## Verify Email

Responsibilities

- Resend Verification Email
- Check Verification Status
- Redirect to Dashboard

Firebase Methods

- sendEmailVerification()
- currentUser.reload()

---

## Login

Supports

- Email Login
- Google Login
- Apple Login

---

## Password Recovery

Uses

sendPasswordResetEmail()

Firebase sends the reset link directly to the user's email.

No custom password reset page is required.

---

## Authentication State

Protected routes should listen to Firebase Authentication state.

Unauthenticated users are redirected to Login.

Verified users receive full platform access.

Unverified users may browse the dashboard but cannot:

- Receive payments
- Publish order links
- Accept bookings