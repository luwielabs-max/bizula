
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

function loadServiceAccount() {
  // Production: load credentials from the hosting provider's environment.
  const credentials = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  if (credentials) {
    try {
      return JSON.parse(credentials);
    } catch {
      throw new Error(
        "FIREBASE_SERVICE_ACCOUNT_JSON must contain valid JSON."
      );
    }
  }

  // Local development: retain support for the existing ignored JSON file.
  const localPath = join(
    process.cwd(),
    "bizula-firebase-adminsdk-fbsvc-c4831c9496.json"
  );

  if (existsSync(localPath)) {
    return JSON.parse(readFileSync(localPath, "utf8"));
  }

  throw new Error(
    "Firebase Admin credentials are missing. Set FIREBASE_SERVICE_ACCOUNT_JSON or provide the local service-account file."
  );
}

const serviceAccount = loadServiceAccount();

const firebaseApp =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp({
        credential: cert(serviceAccount),
      });

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
