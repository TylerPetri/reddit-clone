import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';

function Router() {
  return (
    <>
      <Navbar />
      <Route exact path='/' component={Home} />
    </>
  );
}

export default Router;
