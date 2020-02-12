import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import exit from '../Pages/Home/img/logout.png';
import {useHistory} from "react-router-dom";
import firebase from 'firebase';

function Header (props){
    const history = useHistory();

    const logout = () => {
        firebase
        .auth()
        .signOut()
        .then(() => {
            history.push('/')
        })
        .catch(console.error);
  
    }

    return(
       <header className={css(styles.header)}>
           <span className={css(styles.headerTitle)}>{props.title}</span>
           <img src={exit} className={css(styles.logout)} onClick={logout}/>{props.secondTitle}
       </header>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FF5A00',
        color: '#fff',
        fontSize: '3vh',
        fontWeight: 'bold',
        height: '7vh',
        boxShadow: '1px 0px 10px 0px #a6a6a6',
    },

    headerTitle: {
        marginLeft: 20
    },
    
    logout: {
        width: '6vw'
    }
})

export default Header;