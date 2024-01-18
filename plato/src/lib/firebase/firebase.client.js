import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

let firebaseApp;
if(!getApps().length)
{
  firebaseApp = initializeApp(firebaseConfig)
}
else
{
  firebaseApp = getApp()
  deleteApp(firebaseApp)
  firebaseApp = initializeApp(firebaseConfig)
}

export const auth = getAuth(firebaseApp);

//init firebase app
export const db = getFirestore();

const colRef = collection(db, 'users')