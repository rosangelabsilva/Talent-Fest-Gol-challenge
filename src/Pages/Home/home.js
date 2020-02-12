import React, {useEffect, useState} from "react";
import { StyleSheet, css } from 'aphrodite';
import firebase from 'firebase';
import Header from '../../Components/header';
import { db } from '../../config';
import {useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const [userName, setUsername] = useState('');
    useEffect( () => {
        firebase
        .auth()
        .onAuthStateChanged( (user) => {
          if(user){
            db.collection('clients')
            .doc(user.uid)
            .get()
            .then( user => {
                setUsername(user.data().nome);
            });
          }
        })
      }, [])  

      const goToSeats = () => {
        history.push('/seats')
      }

    return(
        <>
            <Header 
                title = {"Bem vinda(o) " + userName}
            />
            <main className="home">
                <div className={css(styles.locator)} onClick={goToSeats}>
                    <p>LOCALIZADOR: <span className={css(styles.code)}>GNRHYZ</span></p>
                    <p className={css(styles.status)}>IDA - voo G3 1265</p>
                    <div className={css(styles.passageDetail)}>
                        <ul>
                            <li className={css(styles.lists)}>Guarulhos(GRU)</li>
                            <li className={css(styles.lists)}>São Paulo</li>
                            <li className={css(styles.lists)}>15/02/2020 -10h00</li>
                            <li className={css(styles.lists)}>Voo Direto</li>
                        </ul>
                        <ul>
                            <li className={css(styles.lists)}>Cuiaba (CGB)</li>
                            <li className={css(styles.lists)}>Mato Grosso</li>
                            <li className={css(styles.lists)}> 15/02/2020 -11h20</li>
                            <li className={css(styles.lists)}>Check-in ainda não realizado</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
};

const styles = StyleSheet.create({
    headerHome: {
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    user: {
        color: '#FFFFFF',
        fontSize: '20px',
    },

    exit: {
        width: '10%',
    },

    locator: {
        border: '1px solid #000000',
        margin: '0.3rem',
        fontSize: '1.3rem',
    },

    passageDetail: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

    },

    status: {
        background: '#FF5A00',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1rem',
        fontSize: '1.3rem',
        color: '#FFFFFF',
    },

    lists: {
        listStyleType: 'none',
        fontSize: '1rem',
    },

    code: {
        fontSize: '1.3rem',
    }
})

export default Home;