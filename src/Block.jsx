import React from 'react';
import { useHistory } from 'react-router-dom';

import Back from './assets/bloqueo.png';

import './Block.css';

const Block = () => {
    const history = useHistory();

    const goPage = () => {
      history.push("/register");
    };
    return ( 
        <div className='container'>
            <button id='btnBlue' onClick={goPage}>Agenda una cita en sucursal para obtenerlo</button>
              <img src={Back} alt=''/> 
              
        </div>
     );
}
 
export default Block;