import React from 'react';

function Button (props){
    return(
        <button className={props.className}
        onClick={() => props.onClick(props)}
        id={props.id}      
        >
            <p>{props.name}</p>
        </button>
    )
}

export default Button;