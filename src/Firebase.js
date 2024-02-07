// Firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDadhQvQJsezb0Jj8LkaA6NPHvZ6b3guuY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database, ref, onValue, push };
