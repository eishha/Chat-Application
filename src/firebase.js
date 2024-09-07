// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD7lysw7XvTOG_0cZDRXbDGmtK_ym1DdPw',
  authDomain: 'react-chat-application-9a1fd.firebaseapp.com',
  projectId: 'react-chat-application-9a1fd',
  storageBucket: 'react-chat-application-9a1fd.appspot.com',
  messagingSenderId: '788305263492',
  appId: '1:788305263492:web:fdd5c29652426fcd973bd1',
  measurementId: 'G-1ZCZGJCGXW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
