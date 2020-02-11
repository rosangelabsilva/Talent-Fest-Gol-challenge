import React from 'react';

function Button (props){
    return(
        <button className={props.className}
        onclick={props.onclick}
        id={props.id}      
        >
            <p>propos.name</p>
        </button>
    )
}

export default Button;