import firebase from 'firebase'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCrHfKrWmAuIX_S7HiDSpSZDwnp_1PY0iM',
  authDomain: 'shop-top-net.firebaseapp.com',
  projectId: 'shop-top-net',
  storageBucket: 'shop-top-net.appspot.com',
  messagingSenderId: '69303350494',
  appId: '1:69303350494:web:363216356984a1ff0cbe4f',
}
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
export { firebase, auth }
