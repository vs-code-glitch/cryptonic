import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0z8_1AIxay3d0ph4xeOAzZH1aHVrgbbU",
  authDomain: "cryptonic-7e55c.firebaseapp.com",
  projectId: "cryptonic-7e55c",
  storageBucket: "cryptonic-7e55c.appspot.com",
  messagingSenderId: "483292830930",
  appId: "1:483292830930:web:a27a26b46995861317210b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
