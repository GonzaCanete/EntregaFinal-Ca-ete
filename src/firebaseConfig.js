import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBtwph5LcQBgPo29N8nDjEOaseCYoxJaBw",
  authDomain: "probando-react-3104f.firebaseapp.com",
  projectId: "probando-react-3104f",
  storageBucket: "probando-react-3104f.appspot.com",
  messagingSenderId: "974695427199",
  appId: "1:974695427199:web:1d6e336336c75999ac234a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
