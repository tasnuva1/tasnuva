import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={HomePage} exact />
        {/* <Route exact component={Error} /> */}
      </Switch>
    </div>
  );
}

export default App;
