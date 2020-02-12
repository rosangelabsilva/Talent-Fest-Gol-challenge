import React from 'react';
import { db } from '../config';

function Seats (props){
    let src = '';

    props.status === "Disponível"
    ? src = "https://i.ibb.co/GHxPn0g/Screenshot-from-2020-02-11-18-25-39.png"
    : (
        props.status === "Indisponível"
        ? src = "https://i.ibb.co/qMvXqtX/Screenshot-from-2020-02-11-18-25-48.png"
        : src = "https://i.ibb.co/HgF9q2G/Screenshot-from-2020-02-11-18-26-07.png"
    )

    //console.log(window.meu)
    return(
        <img 
            src={src}
            className={props.className}
            onClick={props.handleClick}
            id={props.id}
            alt = "assentos"
        >
        </img>
    )
}
export default Seats;