import React from 'react';
import { useHistory } from 'react-router-dom';

import Back from '../assets/backgAssis.png';

import './Assistant.css';

const Assistant = () => {

    const history = useHistory();

    const goPage = () => {
      history.push('/calendar');
    };

    return ( 
        <div className='container'>
              <img src={Back} alt=''/>  
              <button className='redireccion' onClick={goPage}/>   
        </div>
     );
}
 
export default Assistant;