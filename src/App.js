import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from '@shopify/polaris';
import SignIn from './SignIn';

function App() {
  return (
    <div className='App'>
      <Card title='welcome' sectioned>
        <SignIn />
      </Card>
    </div>
  );
}

export default App;
