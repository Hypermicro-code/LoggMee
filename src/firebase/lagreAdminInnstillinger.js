// src/firebase/lagreAdminInnstillinger.js
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function lagreAdminInnstillinger(arrangementId, innstillinger) {
  try {
    const docRef = doc(db, "config", arrangementId);
    await setDoc(docRef, innstillinger, { merge: true });
    console.log("Innstillinger lagret:", innstillinger);
  } catch (error) {
    console.error("Feil ved lagring av innstillinger:", error);
    throw error;
  }
}
