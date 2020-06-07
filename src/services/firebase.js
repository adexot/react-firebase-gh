import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDO8LNiGOgrJ5yEqx3YTVNN-BzE1C4oVn0',
  authDomain: 'react-firebase-gh.firebaseapp.com',
  // databaseURL: 'https://react-firebase-gh.firebaseio.com',
  // projectId: 'react-firebase-gh',
  // storageBucket: 'react-firebase-gh.appspot.com',
  // messagingSenderId: '506637156',
  // appId: '1:506637156:web:1ee4f846201e0369b9a871',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
