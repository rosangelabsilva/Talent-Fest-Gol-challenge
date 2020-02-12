import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Footer (props){
    return(
       <footer className={css(styles.footer)}>
           <img className={css(styles.homeIcon)} src="https://i.ibb.co/LtRdX00/home-2-1.png"/>
           <span className={css(styles.headerTitle)}>{props.content}</span>
       </footer>
    )
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
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
   }
})

export default Footer;