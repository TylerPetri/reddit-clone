import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

function Router() {
  return (
    <>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </>
  );
}

export default Router;
