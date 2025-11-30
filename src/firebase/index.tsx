import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "disney-app-clone-f0459.firebaseapp.com",
  projectId: "disney-app-clone-f0459",
  storageBucket: "disney-app-clone-f0459.firebasestorage.app",
  messagingSenderId: "582967233878",
  appId: "1:582967233878:web:077fd039a8189265b9daf7",
  measurementId: "G-4LHB5BQCE6",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
