import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC0-s9gB2ZMpDpGC1cFFUWye_gepgPxA10',
  authDomain: 'form-ninja.firebaseapp.com',
  projectId: 'form-ninja',
  storageBucket: 'form-ninja.appspot.com',
  messagingSenderId: '1024960551348',
  appId: '1:1024960551348:web:1ec7d4510579b25366bae1',
};

const app = initializeApp(firebaseConfig);

export { app };
