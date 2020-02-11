import React from "react";
import { StyleSheet, css } from 'aphrodite';
import exit from './img/logout.png'


const Home = () => {

    return(
        <>
            <header className={css(styles.headerHome)}>
                <p>Olá <span>Alessandra,</span></p>
                <img  src={exit } />
            </header>
            <main className="home">
                Home
            </main>
        </>
    )
};

const styles = StyleSheet.create({
    headerHome: {
        backgroundColor: 'red',
    }
})

export default Home;