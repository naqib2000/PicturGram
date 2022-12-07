import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//import seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD9sHz_dDNLml3uxsmuW8PuDqAxMCWatoo",
  authDomain: "picturgram-2f680.firebaseapp.com",
  projectId: "picturgram-2f680",
  storageBucket: "picturgram-2f680.appspot.com",
  messagingSenderId: "1058127293948",
  appId: "1:1058127293948:web:4faf17188e7fb86d569679",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//you want to call the seed file here but only once
// seedDatabase(firebase);

// console.log("firebase", firebase);

export { firebase, FieldValue };
