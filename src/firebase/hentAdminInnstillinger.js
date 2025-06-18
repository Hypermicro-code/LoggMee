// src/firebase/hentAdminInnstillinger.js
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function hentAdminInnstillinger(arrangementId) {
  const docRef = doc(db, "config", arrangementId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.warn("Fant ingen innstillinger for:", arrangementId);
    return null;
  }
}
