import { getFirestore, } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// Replace with values from Firebase console (or load from env)
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxpkroaPm3uxm_wWtZT2RFd-1lurEXqrE",
  authDomain: "xita-trivia.firebaseapp.com",
  projectId: "xita-trivia",
  storageBucket: "xita-trivia.firebasestorage.app",
  messagingSenderId: "651011220308",
  appId: "1:651011220308:web:9e53fb12ccdb90b5051ec1",
  measurementId: "G-FJBMXR1Z4N"
};

// Initialize Firebase



// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const ai = getAI(app, { backend: new GoogleAIBackend() });

// Create a `GenerativeModel` instance with a model that supports your use case

// const analytics = getAnalytics(app);
export const firebaseAuth = auth;  
export const firestore = getFirestore(app);
export const aiModel = getGenerativeModel(ai, { model: "gemini-2.5-flash" });

// export const storage = getStorage(app);