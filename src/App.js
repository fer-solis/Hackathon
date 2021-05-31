import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Block from './Block.jsx';
import Register from './Register.jsx';

import './App.css';
//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path="/" exact>
            <Block/>
          </Route>
          <Route path="/register">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Register/>
            </MuiPickersUtilsProvider>  
          </Route>
          <Route path="/confirmation">
            <p>Ya me registré</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
