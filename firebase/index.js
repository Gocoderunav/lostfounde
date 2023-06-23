// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBbBfji3B3BaXEhquYngitnH52YxCBknJs",
//   authDomain: "mylist1-2fad5.firebaseapp.com",
//   projectId: "mylist1-2fad5",
//   storageBucket: "mylist1-2fad5.appspot.com",
//   messagingSenderId: "472105994452",
//   appId: "1:472105994452:web:dfcab9842dee958681d341",
//   measurementId: "G-C6HR4SW2CW",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwZQxF6r5cS6g_7OAgUmmR1g9nbinkEE8",
  authDomain: "lostfoundde-c6a85.firebaseapp.com",
  projectId: "lostfoundde-c6a85",
  storageBucket: "lostfoundde-c6a85.appspot.com",
  messagingSenderId: "825313828533",
  appId: "1:825313828533:web:58577c438de402bc3b28fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };