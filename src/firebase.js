import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAu2IIlm_hnBdF7yKX-icQajgCMFBoEGUQ',
  authDomain: 'gametore-3042b.firebaseapp.com',
  projectId: 'gametore-3042b',
  storageBucket: 'gametore-3042b.appspot.com',
  messagingSenderId: '455937109498',
  appId: '1:455937109498:web:43bcbc8d303072dc264843',
  measurementId: 'G-3X5WQ1CYWW'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
