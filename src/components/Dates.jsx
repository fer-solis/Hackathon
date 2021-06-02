import React from 'react';
import { useHistory } from 'react-router-dom';

import HeaderBanker from '../assets/banker.png';


const HeaderDate = () => {
    const history = useHistory();

    const goPage = () => {
      history.push("/register");
    };
    return ( 
        <div>
             <button className='invisible2' onClick={goPage}/>  
              <img id='headerDate'src={HeaderBanker} alt=''/>   
        </div>
     );
}
 
export default HeaderDate;