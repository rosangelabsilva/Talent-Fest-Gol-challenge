import React from 'react';

function Seats (props){
    let src = '';

    props.status === "Disponível"
    ? src = "https://i.ibb.co/GHxPn0g/Screenshot-from-2020-02-11-18-25-39.png"
    : (
        props.status === "Indisponível"
        ? src = "https://i.ibb.co/qMvXqtX/Screenshot-from-2020-02-11-18-25-48.png"
        : src = "https://i.ibb.co/HgF9q2G/Screenshot-from-2020-02-11-18-26-07.png"
    )
    
    const changeStatus = () => {
        console.log("mudou estado");
    }

    return(
<<<<<<< HEAD
        <img className={props.className}
            onClick={props.onClick}
            disabled={props}
            id={props.id}>
=======
        <img 
            src={src}
            className={props.className}
            onClick={changeStatus}
            id={props.id}
            alt = "assentos"
        >
>>>>>>> 15b23d32a786846b4a23059cb7601f5dc1208e78
        </img>
    )
}
export default Seats;