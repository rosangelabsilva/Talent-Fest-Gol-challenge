import React from "react";
import whiteLogo from "./img/logoBranca.png";
import { StyleSheet, css } from 'aphrodite';

const Login = () => {

    return(
        <main className={css(styles.login)}>
            <div className={css(styles.containerLogin)}>
                <div className={css(styles.logoBranca)}>
                    <img className={css(styles.imgLogo)} src={whiteLogo}/>
                    <p className={css(styles.reservas)}>Revervas</p>
                </div>
                <div className={css(styles.inputs)}>
                    <label className={css(styles.reservas1)}>E-mail</label>
                    <input className={css(styles.input)} placeholder='seuemail@mail.com'/>
                </div>
                <div className={css(styles.inputs)}>
                    <label className={css(styles.reservas1)}>Senha</label>
                    <input className={css(styles.input)} placeholder='senha de 6 digitos'/>
                </div>
            </div>
            <div className={css(styles.button)}>
                <button className={css(styles.entrar)}>Entrar</button>
            </div>

        </main>
    )
}

const styles = StyleSheet.create({
    login: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FF5A00',
        height: '100vh',
        justifyContent: 'space-around',
    },

    logoBranca: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgLogo: {
        width: '65%',
    },

    reservas: {
        color: 'White',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        paddingLeft: '8rem',
    },

    reservas1: {
        color: 'White',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        display: 'flex',
        justifyContent: 'left',
        width: '100%',

    },

    inputs: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        border: 'none',
        outline: 'none',
    },

    input: {
        background: '#FFFFF',
        borderRadius: '5px',
        width: '16rem',
        height: '2.2rem',
        fontSize: '1.2rem',
        padding: '0rem 0rem 0.5rem 2.2rem'
    },

    containerLogin: {
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        color: 'White',
    },

    entrar: {

    }

});

    export default Login;