import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DisplayBankAccount from "./apps/core-logic/displayBankAccount";
import AboutReact from "./apps/core-logic/aboutReact";


function App() {
  return (<Router>
    <div className="App">
      <header>
        <nav id ='test' className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">React Thinking</a>

 
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={AboutReact} />
              <Route path="/DisplayBankAccount" component={DisplayBankAccount} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;