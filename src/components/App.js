import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CarsIndex from '../containers/CarsIndex';
import CarsNew from '../containers/CarsNew';
import CarsShow from '../containers/CarsShow';

import '../app.css';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CarsIndex} />
          <Route path="/cars/new" exact component={CarsNew} />
          <Route path="/cars/:id" component={CarsShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
