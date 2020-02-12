import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {useHistory} from "react-router-dom";

function Footer (props){
    const history = useHistory();

    const goToHome = () => {
        history.push('/home')
    }

    return(
       <footer className={css(styles.footer)}>
           <img 
                className={css(styles.homeIcon)} 
                src="https://i.ibb.co/LtRdX00/home-2-1.png" 
                onClick={goToHome} 
                alt="home-icon"
            />
           <span className={css(styles.nextPage)} onClick={props.handleClick}>{props.primarycontent}</span>
       </footer>
    )
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FF5A00',
        color: '#fff',
        fontSize: '3vh',
        fontWeight: 'bold',
        height: '7vh',
        boxShadow: '1px 0px 10px 0px #a6a6a6',
    },

   homeIcon: {
    height: '5vh',
   },

   nextPage: {
       display: "flex",
       justifyContent: "flex-end",
       width: "70%"

   }
})

export default Footer;