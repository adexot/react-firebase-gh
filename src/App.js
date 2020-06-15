import React from 'react';
import { Router, Link } from '@reach/router';
import logo from './logo.svg';
import './App.css';
import { Card } from '@shopify/polaris';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

function App() {
  return (
    <div className='App'>
      <Card title='welcome' sectioned>
        <nav>
          <Link to='/'>dashboard</Link> | <Link to='/login'>login</Link> |{' '}
          <Link to='/about'>about</Link>
        </nav>
        <Router>
          <SignIn path='login' />
          <Dashboard path='/' />
          <About path='about' />
        </Router>
      </Card>
    </div>
  );
}

export default App;
