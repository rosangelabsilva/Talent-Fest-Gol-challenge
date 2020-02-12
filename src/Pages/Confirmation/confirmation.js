import React from "react";
import Head from "../../Components/header";
import Footer from "../../Components/footer";
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
    main: {
        
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '50%',
        border: '1px solid #000000',
        padding: '1%',
        marginTop: '20%',
        marginBottom: '20%',
    },
    background: {
        backgroundColor: '#ff5a00',
        justifyContent: 'center',
        alignContent: 'center', 
        
    }, 
    teste: {
        padding: '10%',

    },

    label: {
        justifyContent: 'center',
        alignContent: 'center',   
        padding: '2%', 
    },
    icon: {


    }
})


const Confirmation = () => {

    return(
        <>
        <Head 
        title ='Confirmação'/>
        <main className={css(style.main)}>
            <div className={css(style.background)}>
                <div className={css(style.teste)}>

            <p classNAme={css(style.label)}>Reserva de assento finalizado!</p>
            <p classNAme={css(style.label)}>IDA - Voo NUMERO</p>
            <p classNAme={css(style.label)}>Número da confirmação: NUMERO</p>
            <p classNAme={css(style.label)}>Cliente: CLIENTE</p>
            <p classNAme={css(style.label)}>Assento reservado: ASSENTO</p>

            

            <img 
                className={css(style.icon)} 
                src="./check.png" 
                alt="check"
            />
            </div>
            </div>

        </main>

        <Footer 
        primarycontent ='PROSSEGUIR'/>
        </>         

    )
}


export default Confirmation;