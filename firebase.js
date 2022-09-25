
// step 1
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// step2
const firebaseConfig = {
    apiKey: "AIzaSyAZPFXGe6FaoJaYVMc75rq47VmJfiR4gBI",
    authDomain: "nextjsblog-15e45.firebaseapp.com",
    projectId: "nextjsblog-15e45",
    storageBucket: "nextjsblog-15e45.appspot.com",
    messagingSenderId: "5180139330",
    appId: "1:5180139330:web:360f85071e1421f97f0adb"
  };
  

//   step3
  if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)


//   step4
const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

// step5
export {auth,db,storage,serverTimestamp}