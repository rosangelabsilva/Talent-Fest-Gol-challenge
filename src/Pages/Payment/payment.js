import React from "react";
import Button from '../../Components/button';
import { StyleSheet, css } from 'aphrodite'; 
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import {useHistory} from 'react-router-dom';
import Seats from "../../Components/seats";


const Payment = () => {
    const history = useHistory();

    const payment= (e)=> {
        history.push('/confirmation')
    }
    return(
        <div className ={css(styles.containerPayment)}>
            <Header title ={"Pagamento da reserva"}/>
            {/* <Seats /> */}
            <main className ={css(styles.payment)}>
            <h1 className ={css(styles.title)}>Assentos reservados</h1>
                <form className ={css(styles.form)}>
                    <label className ={css(styles.label)}>Passageiro</label>
                    <label className ={css(styles.label)}>Assento</label>
                    <label className ={css(styles.label)}>Valor</label>
                </form>
                <form className ={css(styles.form)}>
                    <label className ={css(styles.label2)}>Alessandra Silva</label>
                    <label className ={css(styles.label2)}>F07</label>
                    <label className ={css(styles.label2)}>R$ 30,00</label>
                </form>
                <form action="/processar_pagamento" method="post" id="pay" name="pay" >
                    {/* <fieldset> */}
                        <ul className ={css(styles.ul)}>
                            <li className ={css(styles.li)}>
                                <label className ={css(styles.informationInput)} for="cardNumber">Número do cartão:</label>
                                <input type="text" id="cardNumber" placeholder="4509 9535 6623 3704" className ={css(styles.InputPayment)}/>
                            </li>
                            {/* <li className ={css(styles.expirationKey)}>
                                <li className ={css(styles.li)}>
                                    <label className ={css(styles.informationInput)}>Chave de Segurança:</label>
                                    <input type="text" id="securityCode"  placeholder="123" className ={css(styles.securityKey)}/>
                                </li>
                                <li className ={css(styles.li, styles.securityKey)}>
                                    <label className ={css(styles.informationInput)}>Vencimento:</label>
                                    <input type="text" id="cardExpirationMonth"  placeholder="11/22" className ={css(styles.dueDate)} />
                                </li>
                            </li> */}
                            <li className ={css(styles.li)}>
                                <label for="cardholderName" className ={css(styles.informationInput)}>Nome do titular:</label>
                                <input type="text" id="cardholderName" placeholder="AComo está gravado no cartão" className ={css(styles.InputPayment)}/>
                            </li>
                            <li className ={css(styles.li)}>
                                <label for="docType" className ={css(styles.informationInput)}>CPF:</label>
                                <input id="docType" placeholder="555.555.555-55" className ={css(styles.InputPayment)}></input>
                            </li>
                        </ul>
                        
                        <div className ={css(styles.botao)}>
                            <button className ={css(styles.ConfirmBuy)} onClick = {payment}>
                                <span>
                                 Confirmar
                                </span>
                            </button>
                        </div>
                </form>
            </main>
            <Footer
            />
        </div>
    )

}

export default Payment;

const styles = StyleSheet.create({
    payment: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '67%',
    },

    ul: {
        paddingLeft: 0,
    },

    botao: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: '1.5rem',
    },

    containerPayment: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    ConfirmBuy: {
        background: '#F5F5F5',
        borderRadius: '5px',
        width: '183px',
        height: '45px',
        color: '#FF5A00',
        fontSize: '18px',
        fontWeight: 'bold',
        paddingLeft: '25%',
        display: 'flex',
        justifyContent: 'center',
        paddingRight: '24%'
    },

    ConfirmBuy2: {
        color: '#FF5A00',
    },
    
    informationInput: {
        fontSize: '1rem',
    },

    InputPayment: {
        width: '265px',
        height: '35px',
        border: '1px solid #000000'
    },

    dueDate: {
        border: '1px solid #000000'  
    },

    securityKey: {
        border: '1px solid #000000'  
    },

    li: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: '.4rem',
    },

    expirationKey: {
        display: 'flex',
    },

    securityKey: {
        height: '2rem',
    },

    label: {
        margin: 20,
        fontWeight: 'bolder'
    },
    label2:{
        margin: 15
    }
})

