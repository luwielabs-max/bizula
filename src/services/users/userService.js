import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../../firebase/config";

export const getUserProfile = async (uid) => {
  try {
    console.log("Searching for user UID:", uid);

    const usersRef = collection(db, "users");

    const q = query(
      usersRef,
      where("uid", "==", uid)
    );

    const snapshot = await getDocs(q);

    console.log(
      "Matching users found:",
      snapshot.size
    );

    if (snapshot.empty) {
      throw new Error(
        `User profile not found for UID: ${uid}`
      );
    }

    const userDoc = snapshot.docs[0];

    const profile = {
      id: userDoc.id,
      ...userDoc.data(),
    };

    console.log("User profile:", profile);

    return profile;

  } catch (error) {
    console.error(
      "getUserProfile ERROR:",
      error
    );

    throw error;
  }
};