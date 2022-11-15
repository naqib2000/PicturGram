import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//import seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAzxuVQ2HN9NYZ99tvX0fHSX71iG6lh7J4",
  authDomain: "picturgram-f888f.firebaseapp.com",
  projectId: "picturgram-f888f",
  storageBucket: "picturgram-f888f.appspot.com",
  messagingSenderId: "170575356152",
  appId: "1:170575356152:web:36d5b2abde70ca50465b0d",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//you want to call the seed file here but only once
// seedDatabase(firebase);

// console.log("firebase", firebase);

export { firebase, FieldValue };
