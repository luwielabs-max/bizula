import {
  cert,
  getApps,
  initializeApp,
} from "firebase-admin/app";

import {
  getFirestore,
} from "firebase-admin/firestore";

import { readFileSync } from "fs";
import { resolve } from "path";

let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT
  );
} else {
  const serviceAccountPath = resolve(
    "firebase-service-account.json"
  );

  serviceAccount = JSON.parse(
    readFileSync(
      serviceAccountPath,
      "utf8"
    )
  );
}

if (getApps().length === 0) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

export { db };
