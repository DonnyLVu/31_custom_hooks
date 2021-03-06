import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacter from '../../containers/AllCharacter';
import DetailPage from '../../containers/DetailPage';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={AllCharacter}>
        </Route>
        <Route
          exact
          path="/characters/:_id"
          component={DetailPage}>
        </Route>
      </Switch>
    </Router>
  );
}
