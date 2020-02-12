import React from 'react';

function Seats (props){
    return(
        <img className={props.className}
            onClick={props.onClick}
            disabled={props}
            id={props.id}>
        </img>
    )
}
export default Seats;