// firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/performance';
import 'firebase/compat/analytics';
import 'firebase/compat/database';
import 'firebase/compat/messaging';
import 'firebase/compat/functions';
import 'firebase/compat/remote-config';
import 'firebase/compat/app-check';

const firebaseConfig = {
  apiKey: 'AIzaSyDzy0xuvjNTMygHsfEtsirsfMzzTR0ZLpU',
  authDomain: 'chatt-c6c2d.firebaseapp.com',
  projectId: 'chatt-c6c2d',
  storageBucket: 'chatt-c6c2d.appspot.com',
  messagingSenderId: '915156667023',
  appId: '1:915156667023:web:f9ae88bd7b063cb1cb3efa',
  measurementId: 'G-DX1YWPMBT5',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
