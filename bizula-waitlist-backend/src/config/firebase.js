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

const serviceAccountPath = resolve(
  "firebase-service-account.json"
);

const serviceAccount = JSON.parse(
  readFileSync(serviceAccountPath, "utf8")
);

if (getApps().length === 0) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

export { db };