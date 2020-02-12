import React from 'react';

function Input (props){
    return(
        <input className={props.className} 
        type={props.type} 
        id={props.id}
        placeholder={props.placeholder}>
        </input>
    )
}

export default Input;