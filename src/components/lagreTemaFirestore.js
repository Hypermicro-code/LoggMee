// Funksjon for å lagre temadata til Firestore (og bilde til Storage)
import { db, storage } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const lagreTema = async (eventId, farge, bildeFil) => {
  let bildeUrl = '';

  if (bildeFil) {
    const bildeRef = ref(storage, `temaer/${eventId}/bakgrunn.jpg`);
    await uploadBytes(bildeRef, bildeFil);
    bildeUrl = await getDownloadURL(bildeRef);
  }

  const data = {
    farge,
    bildeUrl,
    sistEndret: new Date()
  };

  await setDoc(doc(db, 'temaer', eventId), data);
};
