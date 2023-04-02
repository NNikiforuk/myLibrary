import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDf3rcwllTMFZ56JVH_QI0GeJQYbVB0F1c",
	authDomain: "my-library-69417.firebaseapp.com",
	projectId: "my-library-69417",
	storageBucket: "my-library-69417.appspot.com",
	messagingSenderId: "52433943471",
	appId: "1:52433943471:web:eda423d62127eba17d8d5a",
	measurementId: "G-FZMX3RYZX7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const database = getFirestore(app);
