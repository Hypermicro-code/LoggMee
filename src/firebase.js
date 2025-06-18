// firebase.js – tilkobling til Firestore og Storage
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
   apiKey: "AIzaSyDxelD7mwWtdAtH9JQy60iJssc6mp_KXMM",
  authDomain: "loggmee.firebaseapp.com",
  projectId: "loggmee",
  storageBucket: "loggmee.firebasestorage.app",
  messagingSenderId: "880963718003",
  appId: "1:880963718003:web:359f751708430c7ebb1306"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
