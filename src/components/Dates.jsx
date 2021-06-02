import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderBanker from '../assets/banker.png';
import BarTime from '../assets/BarTime.png';
import './Dates.css';
const HeaderDate = () => {
    const history = useHistory();
    const goPage = () => {
      history.push("/register");
    };
    return (
        <div>
             <button className='invisible2' onClick={goPage}/>
              <img id='headerDate'src={HeaderBanker} alt=''/>
              <h1 id="horario">HORARIO DE LA CITA</h1>
              <img id='BarTime'src={BarTime} alt=''/>
              <h1 id="productos">SUGERENCIA DE PRODUCTO</h1>
            <div>
                <div id="bloque1">
                <input type="checkbox"/> <p>Seguro de gastos medicos mayores</p>
                <input type="checkbox"/> <p>Tarjeta de crédito</p>
                <input type="checkbox"/> <p>Crédito de nomina</p>
                </div>
                <div id="bloque2">
                <input type="checkbox"/> <p>Crédito personal</p>
                <input type="checkbox"/> <p>Cuenta de débito</p>
                <input type="checkbox"/> <p>Ahorro e inversiones</p>
                </div>
                <div id="buttonsArea">
                <button id="buttonBlue">Pasar a cubiculo</button>
                <button id="buttonBlue">Fin de la cita</button>
                </div>
              </div>
        </div>
     );
}
export default HeaderDate;