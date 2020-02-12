import React from "react";
import Button from '../../Components/button';
import { StyleSheet, css } from 'aphrodite'; 
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import {useHistory} from 'react-router-dom';


const Payment = () => {
    const history = useHistory();

    const payment= (e)=> {
        history.push('/confirmation')
    }
    return(
        <>
            <Header title ={"Pagamento da reserva"}/>
            <main className ={css(styles.payment)}>
                <form action="/processar_pagamento" method="post" id="pay" name="pay" >
                    <fieldset>
                        <ul>
                            <li>
                                <label for="cardNumber">Número do cartão:</label>
                                <input type="text" id="cardNumber" placeholder="4509 9535 6623 3704"/>
                            </li>
                            <li>
                                <label for="securityCode">Chave de Segurança:</label>
                                <input type="text" id="securityCode"  placeholder="123" />
                            </li>
                            <li>
                                <label for="cardExpirationMonthAndYear">Vencimento:</label>
                                <input type="text" id="cardExpirationMonth"  placeholder="11/22"  />
                            </li>
                            <li>
                                <label for="cardholderName">Nome do titular:</label>
                                <input type="text" id="cardholderName" placeholder="AComo está gravado no cartão" />
                            </li>
                            <li>
                                <label for="docType">CPF:</label>
                                <input id="docType" placeholder="555.555.555-55" ></input>
                            </li>
                        </ul>
                        <input type="hidden" name="amount" id="amount"/>
                        <input type="hidden" name="description"/>
                        <input type="hidden" name="paymentMethodId" />
                        <Button value="Pay!" onClick = {payment}>Pagar</Button>
                    </fieldset>
                </form>
            </main>
            <Footer/>
        </>
    )

}

export default Payment;

const styles = StyleSheet.create({
    payment: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FF5A00',
        height: '100vh',
        justifyContent: 'space-around',
    }
})

