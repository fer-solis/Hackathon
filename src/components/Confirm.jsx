import React from 'react';
import { useHistory } from 'react-router-dom';

import Dates from '../assets/date.png';

import './Confirm.css';

const Confirm = () => {

    const history = useHistory();

    const goPage = () => {
      history.push('/assistant');
    };

    return ( 
        <div className='container'>
              <img src={Dates} alt=''/> 
              <button className='redireccion' onClick={goPage}/>
        </div>
     );
}
 
export default Confirm;