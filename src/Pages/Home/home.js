import React, { useEffect, useState } from "react";
import { StyleSheet, css } from 'aphrodite';
import firebase from 'firebase';
import Header from '../../Components/header';
import { db } from '../../config';
import {useHistory} from "react-router-dom";
import Swal from 'sweetalert2'
    
const Home = () => {
  const history = useHistory();
  const [userName, setUsername] = useState('');
  
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Aproveite para marcar seus assentos',
        showConfirmButton: false,
        timer: 2000
      })

    useEffect( () => {
        firebase
        .auth()
        .onAuthStateChanged( (user) => {
          if(user){
            db.collection('clients')
            .doc(user.uid)
            .get()
            .then(user => {
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
                    <p className={css(styles.locatorTitle)}>LOCALIZADOR: <span className={css(styles.code)}>GNRHYZ</span></p>
                    <p className={css(styles.status)}>IDA - voo G3 1265</p>
                    <div className={css(styles.passageDetail)}>
                        <ul className={css(styles.containerLocator)}>
                            <li className={css(styles.lists)}>Guarulhos(GRU)</li>
                            <li className={css(styles.lists)}>São Paulo</li>
                            <li className={css(styles.schedule)}>15/02/2020 -10h00</li>
                            <li className={css(styles.listsText)}>Voo Direto</li>
                        </ul>
                        <ul className={css(styles.containerLocator)}>
                            <li className={css(styles.lists)}>Cuiaba (CGB)</li>
                            <li className={css(styles.lists)}>Mato Grosso</li>
                            <li className={css(styles.schedule)}> 15/02/2020 -11h20</li>
                            <li className={css(styles.listsText, styles.listsDirect)}>Check-in ainda não realizado</li>
                        </ul>
                    </div>
                </div>

                {/* <div className={css(styles.locator)}>
                    <p>LOCALIZADOR: <span className={css(styles.code)}>GAFHFI</span></p>
                    <p className={css(styles.status)}>VOLTA - Voo G7 1895</p>
                    <div className={css(styles.passageDetail)}>
                        <ul>
                            <li className={css(styles.lists)}>Cuiabá (CGB)</li>
                            <li className={css(styles.lists)}>Mato Grosso</li>
                            <li className={css(styles.lists)}>21/02/2020 - 15h00</li>
                            <li className={css(styles.lists)}>Voo Direto</li>
                        </ul>
                        <ul>
                            <li className={css(styles.lists)}>Guarulhos (CGB)</li>
                            <li className={css(styles.lists)}>São Paulo</li>
                            <li className={css(styles.lists)}>21/02/2020 - 16h20</li>
                            <li className={css(styles.lists)}>Check-in ainda não realizado</li>
                        </ul>
                    </div>
                </div> */}
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
        padding: '0.6rem',
        marginTop: '-1rem',
        marginBottom: '-1rem',
    },

    lists: {
        listStyleType: 'none',
        fontSize: '1.2rem',
        textDecoration: 'underline',
    },

    containerLocator: {
        width: '100%', 
        height: '8rem',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },

    listsText: {
        listStyleType: 'none',
        fontSize: '1rem',
       
    },
    
    listsDirect: {
        marginLeft: '-3rem',
    },
    

    schedule: {
        listStyleType: 'none',
        fontSize: '1rem',
        color: '#FF5A00',
    },

    code: {
        fontSize: '1.1rem',
        background: '#FF5A00',
        color: '#FFFFFF',
        padding: '0.6rem',
    },

    locatorTitle: {
        fontSize: '1.2rem',
        paddingLeft: '0.6rem',
        
    }
})

export default Home;