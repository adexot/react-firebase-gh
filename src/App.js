import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Button } from '@shopify/polaris';

function App() {
  const handleLogin = () => {
    alert('Login clicked');
  };

  return (
    <div className='App'>
      <Card title='welcome' sectioned>
        <Button onClick={handleLogin}>Login</Button>
      </Card>
    </div>
  );
}

export default App;
