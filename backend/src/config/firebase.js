import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";
import { join } from "path";

const serviceAccount = JSON.parse(
  readFileSync(
    join(process.cwd(), "bizula-firebase-adminsdk-fbsvc-c4831c9496.json"),
    "utf8"
  )
);

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
export const auth = getAuth();