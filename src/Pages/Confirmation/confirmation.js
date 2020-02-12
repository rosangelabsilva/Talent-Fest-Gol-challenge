import React from "react";
import Head from "../../Components/header";
import Footer from "../../Components/footer";
import { StyleSheet, css } from 'aphrodite';
import Icon from './img/check.png';

const style = StyleSheet.create({

    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',   
        height: '100vh',     
    },

    main: {
        
        display: 'flex',
        flexDirection: 'column',
        width: '97%',
        height: '50%',
        border: '1px solid #000000',
        padding: '1%',
        flexDirection: 'column',
        justifyContent: 'space-between',          
        // marginTop: '10%',
        // marginBottom: '10%',
    },
    background: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ff5a00',
        justifyContent: 'space-between',
        alignContent: 'center', 
        width: '100%',
        height: '100%',
        fontSize: '1rem',
        background: '#FF5A00',
        color: '#FFFFFF',
               
    }, 
    teste: {
        padding: '5%', 

    },
    teste2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    label: {
        justifyContent: 'center',
        alignContent: 'center',   
        padding: '1%', 

    },
    icon: {
        marginTop: '10%',
    }
})


const Confirmation = () => {

    return(
        < div className={css(style.body)}>
        <Head 
        title ='Confirmação'/>
        <main className={css(style.main)}>
            <div className={css(style.background)}>
                <div className={css(style.teste)}>

            <p classNAme={css(style.label)}>Reserva de assento finalizado!</p>
            <p classNAme={css(style.label)}>IDA - Voo GNRHYZ</p>
            <p classNAme={css(style.label)}>Número da confirmação: 3568920</p>
            <p classNAme={css(style.label)}>Cliente: Alessandra Silva</p>
            
            <p classNAme={css(style.label)}>Assento reservado: F07</p>
            

            <div className={css(style.teste2)}>

            <img 
                className={css(style.icon)} 
                src={Icon} 
                alt="check"
            />
            </div>
            </div>
            </div>

        </main>

        <Footer />
        </div>       

    )
}


export default Confirmation;