import { db } from "../config/firebase.js";

const WAITLIST_COLLECTION = "waitlist";

function normalizeEmail(email) {
return email.trim().toLowerCase();
}

function formatEntry(doc) {
const data = doc.data();

return {
id: doc.id,
...data,
createdAt: data.createdAt?.toDate?.().toISOString() || null,
updatedAt: data.updatedAt?.toDate?.().toISOString() || null,
};
}

// PUBLIC: Join the waitlist
export async function joinWaitlist(req, res) {
try {
const { email } = req.body;


if (!email || typeof email !== "string") {
  return res.status(400).json({
    success: false,
    message: "Email is required",
  });
}

const normalizedEmail = normalizeEmail(email);

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(normalizedEmail)) {
  return res.status(400).json({
    success: false,
    message:
      "Please enter a valid email address",
  });
}

const waitlistRef = db
  .collection(WAITLIST_COLLECTION)
  .doc(normalizedEmail);

const existingEntry =
  await waitlistRef.get();

if (existingEntry.exists) {
  return res.status(409).json({
    success: false,
    message:
      "This email is already on the waitlist",
  });
}

await waitlistRef.set({
  email: normalizedEmail,
  status: "waiting",
  source: "website",
  createdAt: new Date(),
  updatedAt: null,
});

return res.status(201).json({
  success: true,
  message:
    "You have successfully joined the Bizula waitlist",
});


} catch (error) {
console.error(
"Waitlist signup error:",
error
);


return res.status(500).json({
  success: false,
  message:
    "Something went wrong. Please try again.",
});


}
}

// ADMIN: Read all waitlist entries
export async function getWaitlist(
req,
res
) {
try {
const snapshot = await db
.collection(WAITLIST_COLLECTION)
.orderBy(
"createdAt",
"desc"
)
.get();


const entries = snapshot.docs.map(
  formatEntry
);

return res.status(200).json({
  success: true,
  count: entries.length,
  data: entries,
});


} catch (error) {
console.error(
"Get waitlist error:",
error
);


return res.status(500).json({
  success: false,
  message:
    "Could not get waitlist entries",
});


}
}

// ADMIN: Read one waitlist entry
export async function getWaitlistEntry(
req,
res
) {
try {
const { id } = req.params;


const entry = await db
  .collection(WAITLIST_COLLECTION)
  .doc(id)
  .get();

if (!entry.exists) {
  return res.status(404).json({
    success: false,
    message:
      "Waitlist entry not found",
  });
}

return res.status(200).json({
  success: true,
  data: formatEntry(entry),
});


} catch (error) {
console.error(
"Get waitlist entry error:",
error
);


return res.status(500).json({
  success: false,
  message:
    "Could not get waitlist entry",
});


}
}

// ADMIN: Update waitlist status
export async function updateWaitlistEntry(
req,
res
) {
try {
const { id } = req.params;
const { status } = req.body;


const allowedStatuses = [
  "waiting",
  "contacted",
  "invited",
  "joined",
];

if (
  !status ||
  !allowedStatuses.includes(status)
) {
  return res.status(400).json({
    success: false,
    message:
      "Please provide a valid status",
  });
}

const entryRef = db
  .collection(WAITLIST_COLLECTION)
  .doc(id);

const entry =
  await entryRef.get();

if (!entry.exists) {
  return res.status(404).json({
    success: false,
    message:
      "Waitlist entry not found",
  });
}

await entryRef.update({
  status,
  updatedAt: new Date(),
});

const updatedEntry =
  await entryRef.get();

return res.status(200).json({
  success: true,
  message:
    "Waitlist entry updated",
  data: formatEntry(updatedEntry),
});


} catch (error) {
console.error(
"Update waitlist entry error:",
error
);


return res.status(500).json({
  success: false,
  message:
    "Could not update waitlist entry",
});


}
}

// ADMIN: Delete a waitlist entry
export async function deleteWaitlistEntry(
req,
res
) {
try {
const { id } = req.params;


const entryRef = db
  .collection(WAITLIST_COLLECTION)
  .doc(id);

const entry =
  await entryRef.get();

if (!entry.exists) {
  return res.status(404).json({
    success: false,
    message:
      "Waitlist entry not found",
  });
}

await entryRef.delete();

return res.status(200).json({
  success: true,
  message:
    "Waitlist entry deleted",
});


} catch (error) {
console.error(
"Delete waitlist entry error:",
error
);


return res.status(500).json({
  success: false,
  message:
    "Could not delete waitlist entry",
});


}
}
