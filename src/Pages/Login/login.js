import React, {useState} from "react";
import whiteLogo from "./img/logoBranca.png";
import {useHistory} from "react-router-dom";
import { StyleSheet, css } from 'aphrodite';
import Input from '../../Components/input';
import Button from '../../Components/button';
import { Link, Route} from 'react-router-dom';
import Home from '../Home/home';
import firebase from 'firebase'

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(history.push('/home'))
        .catch(console.error)
    }

    // const handleclick = () => {
        
    //         const user = document.querySelector("#email").value;
    //         const password = document.querySelector('#password').value;
    //         if (user === "alessandra@gmail.com" && password === "123456") {
    //             console.log(user, "Email correto")
    //             window.location="/home"
    //             return <Link to="/home" />
    //         }else{
    //             alert("Dados invalidos");}
        
    // }
   
    return(
        

        <main className={css(styles.login)}>
            <div className={css(styles.containerLogin)}>
                <div className={css(styles.logoBranca)}>
                    <img className={css(styles.imgLogo)} src={whiteLogo} alt="logo"/>
                    <p className={css(styles.reservas)}>Reservas</p>
                </div>
                <div className={css(styles.inputs)}>
                    <label className={css(styles.reservas1)}>E-mail</label>
                    <input className={css(styles.input)} placeholder='seuemail@mail.com' 
                        onChange={(e) => setEmail(e.target.value)} type="email"/>
                </div>
                <div className={css(styles.inputs)}>
                    <label className={css(styles.reservas1)}>Senha</label>
                    <input className={css(styles.input)} placeholder='senha de 6 digitos'
                        onChange={(e) => setPassword(e.target.value)} type="password"/>
                </div>
                <div className={css(styles.button)}>
                    <button className={css(styles.entrar)} onClick={login}>Entrar</button>
                </div>
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
    },

    logoBranca: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgLogo: {
        width: '65%',
        "@media (min-width: 700px)": {
            width: '30%'
        }
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
        "@media (min-width: 700px)": {
            justifyContent: 'center'
        }
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
        height: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        color: 'White',
        fontSize: '1.5rem',
        margin: '25px'
    },

    entrar: {
        background: '#F5F5F5',
        borderRadius: '5px',
        width: '183px',
        height: '45px',
        color: '#FF5A00',
        fontSize: '18px',
        fontWeight: 'bold',
    }

});

    export default Login;