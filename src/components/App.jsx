'use strict';


import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router';

const App = () => (
  <div>
    <Switch>
      <Route path="*" component={HomePage} />
    </Switch>
  </div>
);

export default App;
