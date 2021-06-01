import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../assets/banker.png';

import './Banker.css';

const Banker = () => {
    const history = useHistory();

    const goPage = () => {
      history.push('/register');
    };

    return ( 
        <div className='container'>
              <img src={Header} alt=''/>  
              <button className='redireccion2' onClick={goPage}/>   
        </div>
     );
}

 
export default Banker;