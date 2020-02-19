import React from 'react';
import Navbar from '../Navbar/Navbar';
import LoginContainer from '../Login/LoginContainer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginContainer />
          </Route>
          <Route path="/">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
