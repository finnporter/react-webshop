import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
    apiKey: "AIzaSyA9hYYT3Vwpk1gGgNd2b-zZY2X4PEDg2H0",
    authDomain: "crwn-db-55af4.firebaseapp.com",
    databaseURL: "https://crwn-db-55af4.firebaseio.com",
    projectId: "crwn-db-55af4",
    storageBucket: "crwn-db-55af4.appspot.com",
    messagingSenderId: "681417020874",
    appId: "1:681417020874:web:4932a9ff9d18b2c52beb33",
    measurementId: "G-NZPPWKG221"
  };

  export const firebaseApp = initializeApp(config)

  export const auth = getAuth(firebaseApp);
  export const firestore = getFirestore(firebaseApp);

  export const provider = new GoogleAuthProvider();

  export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });