import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path="/" exact>
            <p>Inicio</p>
            <AccessAlarmIcon/>
          </Route>
          <Route path="/saludo">
            <p>Hola</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
