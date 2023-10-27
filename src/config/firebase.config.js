import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfbOmBjTpuTKbPWFum9o8qstE5A5Ma0dU",
  authDomain: "car-doctor-16f5f.firebaseapp.com",
  projectId: "car-doctor-16f5f",
  storageBucket: "car-doctor-16f5f.appspot.com",
  messagingSenderId: "887846488578",
  appId: "1:887846488578:web:49fbb42e1ccceb290c751b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
