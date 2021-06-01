import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Block from './components/Block';
import Register from './components/Register.jsx';
import Confirm from './components/Confirm.jsx';
import Assistant from './components/Assistant';
import Calendar from './components/Calendar';
import Banker from './components/Banker';

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
            <Confirm/>
          </Route>
          <Route path="/assistant">
            <Assistant/>
          </Route>
          <Route path="/calendar">
            <Calendar/>
          </Route>
          <Route path="/bank">
           <Banker/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
