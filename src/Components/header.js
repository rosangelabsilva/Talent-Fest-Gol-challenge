import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header (props){
    return(
       <header className={css(styles.header)}>
           <span className={css(styles.headerTitle)}>{props.title}</span>
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
    }
})

export default Header;