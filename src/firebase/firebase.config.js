// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyDlc9JgbIV_FnDr3U8DGL6r4pOyd9JmxN4',
  authDomain: 'brand-shop-63da8.firebaseapp.com',
  projectId: 'brand-shop-63da8',
  storageBucket: 'brand-shop-63da8.appspot.com',
  messagingSenderId: '871458339885',
  appId: '1:871458339885:web:0c06660d6e5064b9dd4ca4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
