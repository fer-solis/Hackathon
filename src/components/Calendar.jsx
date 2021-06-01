import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../assets/calendar.png';

import './Calendar.css';

const Calendar = () => {
    const history = useHistory();

    const goPage = () => {
      history.push('/bank');
    };

    return ( 
        <div className='container'>
              <img src={Header} alt=''/>  
              <button className='redireccion2' onClick={goPage}/>   
        </div>
     );
}

 
export default Calendar;