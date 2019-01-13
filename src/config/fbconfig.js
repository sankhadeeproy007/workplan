import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBPxYYv9e4kn50k8PHon5PLKaLosDzh8nM',
  authDomain: 'workplan-8d673.firebaseapp.com',
  databaseURL: 'https://workplan-8d673.firebaseio.com',
  projectId: 'workplan-8d673',
  storageBucket: 'workplan-8d673.appspot.com',
  messagingSenderId: '844046829213'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
