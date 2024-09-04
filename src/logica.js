import React from 'react';
import Verificar from './verificar';
import './verificar.css';

function Logica(props) {
    return (
        <div className='container'>
            <h1>Adivinando el numero del 1 al {props.limite}</h1>
            <input id="numerin" type='number' placeholder='Ingresa tu numero' />
            <button onClick={Verificar}> INTENTAR</button>
        </div>
    )

}



export default Logica;