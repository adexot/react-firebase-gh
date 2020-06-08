import React from 'react';
import firebase from '../services/firebase';

const Dashboard = () => {
  return (
    <div>
      Welcome to the app{' '}
      {(firebase.auth().currentUser &&
        firebase.auth().currentUser.displayName) ||
        ''}
      !!
    </div>
  );
};

export default Dashboard;
