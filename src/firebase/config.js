import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZAbvQta1hp52QIYLEkDSX6fm6cnbzTFI",
  authDomain: "react-upload-files-7a19b.firebaseapp.com",
  projectId: "react-upload-files-7a19b",
  storageBucket: "react-upload-files-7a19b.appspot.com",
  messagingSenderId: "372897660992",
  appId: "1:372897660992:web:29a4194d0952ab4ebb5fa5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
