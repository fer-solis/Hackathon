import React from 'react';
import { useHistory } from 'react-router-dom';

import BackgAssis from '../assets/backgAssis.png';

import './Assistant.css';

const Assistant = () => {
    const history = useHistory();

    const goPage = () => {
      history.push("/calendar");
    };
    return ( 
        <div> 
              <img id='backgroundAssistant' src={BackgAssis} alt=''/>
              <button id='invisibleA' onClick={goPage}/>      
        </div>
     );
}
 
export default Assistant;