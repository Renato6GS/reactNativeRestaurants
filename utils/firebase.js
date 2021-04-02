import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyAGYpYr0m90nDGoWmgfk7RVPG4V7SE3iNg',
   authDomain: 'restaurants-reactnative.firebaseapp.com',
   projectId: 'restaurants-reactnative',
   storageBucket: 'restaurants-reactnative.appspot.com',
   messagingSenderId: '773028956891',
   appId: '1:773028956891:web:61205cb7b891e8ded09afe',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
