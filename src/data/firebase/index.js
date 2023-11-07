import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { 
  FIREBASE_apiKey, FIREBASE_authDomain, FIREBASE_projectId, 
  FIREBASE_storageBucket, FIREBASE_messagingSenderId, 
  FIREBASE_appId, FIREBASE_measurementId 
} from '@env'

const firebaseConfig = {
  apiKey: FIREBASE_apiKey,
  authDomain: FIREBASE_authDomain,
  projectId: FIREBASE_projectId,
  storageBucket: FIREBASE_storageBucket,
  messagingSenderId: FIREBASE_messagingSenderId,
  appId: FIREBASE_appId,
  measurementId: FIREBASE_measurementId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };