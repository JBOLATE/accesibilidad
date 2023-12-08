import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgDQfHHiXJIRXx2DuWV24VbbExhV_pAeU",
    authDomain: "farmaneuquen.firebaseapp.com",
    projectId: "farmaneuquen",
    storageBucket: "farmaneuquen.appspot.com",
    messagingSenderId: "443841233972",
    appId: "1:443841233972:web:569c25967a02e9efcaf661",
    measurementId: "G-HKFEZJPM42"
  };

  
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

export { appFirebase, db };
