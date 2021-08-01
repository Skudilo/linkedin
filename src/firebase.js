import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAB9SfucEL90oXIQb9b4naMfAfMJep8f9Y",
  authDomain: "linkein-clone-31f34.firebaseapp.com",
  projectId: "linkein-clone-31f34",
  storageBucket: "linkein-clone-31f34.appspot.com",
  messagingSenderId: "513332486642",
  appId: "1:513332486642:web:ca4101149debf4b5c3cb6b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage };
export default db