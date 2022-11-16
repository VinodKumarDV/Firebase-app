import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGAbra8sTcgxKRTCcqjKNjqtvR3sNbUI8",
  authDomain: "test-app-bbada.firebaseapp.com",
  projectId: "test-app-bbada",
  storageBucket: "test-app-bbada.appspot.com",
  messagingSenderId: "918054447490",
  appId: "1:918054447490:web:732d38189a358653c8879b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
