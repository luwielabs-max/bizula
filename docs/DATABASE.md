# Firestore Collections

## users

```
uid
name
email
businessName
businessType
photoURL
verified
createdAt
updatedAt
```

---

## products

```
id
ownerId
name
sku
price
stock
category
images
status
```

---

## services

```
id
ownerId
title
description
price
duration
availability
status
```

---

## orders

```
id
buyerId
sellerId
products
subtotal
transactionFee
total
paymentStatus
status
createdAt
```

---

## bookings

```
id
customerId
providerId
serviceId
date
time
status
notes
```

---

## payments

```
id
ownerId
amount
status
method
reference
createdAt
```