import React from 'react';
import { Router, Link } from '@reach/router';
import logo from './logo.svg';
import './App.css';
import { Card } from '@shopify/polaris';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='App'>
      <Card title='welcome' sectioned>
        <nav>
          <Link to='/'>dashboard</Link> | <Link to='/login'>login</Link>
        </nav>
        <Router>
          <SignIn path='login' />
          <Dashboard path='/' />
        </Router>
      </Card>
    </div>
  );
}

export default App;
