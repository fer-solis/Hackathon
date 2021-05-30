import React from 'react';

const Register = () => {
    return (  
        <div className='container'>
            <form>
            <input type='text' placeholder='Ingresa tu nombre'/>
            <input type='email' placeholder='Ingresa tu correo'/>
            <p>Elige tu sucursal</p>
            <p>Elige tu fecha</p>
            <input type='date'/>
            <p>Elige tu hora</p>
            <input type='time'/>
            <input type="submit" value="Confirmar"></input>
            </form>
        </div>
    );
}
 
export default Register;