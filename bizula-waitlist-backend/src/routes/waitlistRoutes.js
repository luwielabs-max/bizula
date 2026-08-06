import { Router } from "express";

import {
joinWaitlist,
getWaitlist,
getWaitlistEntry,
updateWaitlistEntry,
deleteWaitlistEntry,
} from "../controllers/waitlistController.js";

const router = Router();

// Public
router.post(
"/",
joinWaitlist
);

// Admin
router.get(
"/",
getWaitlist
);

router.get(
"/:id",
getWaitlistEntry
);

router.patch(
"/:id",
updateWaitlistEntry
);

router.delete(
"/:id",
deleteWaitlistEntry
);

export default router;
