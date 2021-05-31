import React, { useState } from 'react';
import { db } from './firebase'
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

import 'date-fns';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Header from './assets/encabezadoCliente.png';
import './Register.css';

const useStyle = makeStyles((theme)=>({
    btnConfirm: {
        background: '#006FA9',
        color: 'white',
        position: 'absolute',
        width: '195px',
        height: '41px',
        left: '95px',
        top: '605px'
    },
    inputs: {
        borderRadius: '20px',
        width: '375px',
        height: '52px',
        top: '142px',
        margin: '0 0 14px 0px',
    },
    date: {
        top: '330px',
        width: '375px',
        height: '52px',
        margin: '5px 0px 0px 0px',
        background: '#e0e0e0',
        justifyContent:'flex-end',
        alignItems: 'center'
        // paddingLeft: '11px'
    },

  
    
}))


const Register = () => {
    const [ inputData, setInputData ] = useState({
        name:'',
        email:'',
        date:'',
        time:''
    });//inputs//
    const [selectedDate, setSelectedDate] = useState(new Date('2021-06-18T21:11:54'));//calendar
    const classes = useStyle()
    const history = useHistory();
    
    const handleDateChange = (date) => {
        setSelectedDate(date)
        setInputData({...inputData, date:selectedDate})
    };
    
    const formatData = (id,value)=>{
        // eslint-disable-next-line no-new-object
        return new Object({...inputData, [id]:value});
    }

    const goConfirmation = () => {
      history.push('/confirmation');
    };

    const handleInput = (e) => {
        const { id, value } = e.target;
        setInputData(formatData(id,value));
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        postDate()
        goConfirmation()
    }
    const postDate=()=>{
        db.collection('meets').add(inputData)
        .then((docRef) => {
        }).catch((error) => {
            console.error('Error adding document:', error);
        });
    }


    return (  
        <div className='container'>
            <img className='header' src={Header} alt=''/> 
            <form>
            <TextField className={classes.inputs} id='name' label='Ingresa tu nombre' variant='filled' value={inputData.name} onChange = {handleInput} />
            <TextField className={classes.inputs} id='email' label='Ingresa tu correo' variant='filled' type='email' value={inputData.email} onChange = {handleInput}/>
            <p id='suc'>Elige tu sucursal</p>
            <p id='dateText'>Elige tu fecha</p>
            <KeyboardDatePicker className={classes.date}
                id='date'
                format='dd/MM/yyyy'
                value={selectedDate}
                onChange={handleDateChange}
            />
            <p id='hr'>Elige tu hora</p>
            <input type='time'  id='time' value={inputData.time} onChange = {handleInput}/>
            <Button className={classes.btnConfirm} type='submit' variant='contained' onClick={handleSubmit}>
            Confirmar
            </Button>
            </form>
        </div>
    );
}
 
export default Register;

