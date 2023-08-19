// Import FirebaseAuth and firebase.
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useEffect, useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { getAuth } from "firebase/auth";

// Configure Firebase.
export const config = {
 /* apiKey: "AIzaSyC9Vc8dKJuEqq6kS8_tcZ96lULJHaOBDAM",
  authDomain: "demooo-f13d2.firebaseapp.com",
  databaseURL: "https://demooo-f13d2-default-rtdb.firebaseio.com",
  projectId: "demooo-f13d2",
  storageBucket: "demooo-f13d2.appspot.com",
  messagingSenderId: "50484183725",
  appId: "1:50484183725:web:e8ede37a3e19a82188fc24" */
   apiKey: "AIzaSyA9IOswBePIwJW15iSEGscvQyvOn-pGJPc",
  authDomain: "formal-truth-395909.firebaseapp.com",
  databaseURL: "https://formal-truth-395909-default-rtdb.firebaseio.com",
  projectId: "formal-truth-395909",
  storageBucket: "formal-truth-395909.appspot.com",
  messagingSenderId: "381084506082",
  appId: "1:381084506082:web:6aa95b9c3b5943146a4bbb"
};
firebase.initializeApp(config);

// Configure FirebaseUI.

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInGoogleFaceBook({ switchPage }) {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const auth = getAuth();
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        setIsSignedIn(!!user);
        if (user) {
          sessionStorage.setItem("stateLogin", "true");
          const id = await user.uid;
          const nameUser = await user.displayName;
          const imageUser = await user.photoURL;
          const email = await user.email;
          const userInfo = {
            id,
            nameUser,
            imageUser,
            email,
            phone: "",
            address: "",
          };
          sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
          sessionStorage.setItem("showInfoLogin", true);
          if (switchPage === null) {
            localStorage.setItem("cart", "[]");
          }
          if (switchPage !== "null") {
            window.location.assign(`/${switchPage}`);
          } else {
            window.location.assign("/");
          }
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
  }
  return <></>;
}

export default SignInGoogleFaceBook;
