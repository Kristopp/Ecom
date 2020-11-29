import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDI6g-1it3tvdRN__Eq_rTm4tV6w2t39WE",
    authDomain: "ecomerce-webapp.firebaseapp.com",
    databaseURL: "https://ecomerce-webapp.firebaseio.com",
    projectId: "ecomerce-webapp",
    storageBucket: "ecomerce-webapp.appspot.com",
    messagingSenderId: "720243338539",
    appId: "1:720243338539:web:3175d1d4a8efb767f6296e",
    measurementId: "G-3RCPL8T93C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }
