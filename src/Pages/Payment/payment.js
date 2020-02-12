import React from "react";
import Button from '../../Components/button'

const Payment = () => {

    return(
        <main className="payment">
            Confirmacões
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
                <Button value="Pay!" />
            </fieldset>
        </form>
        </main>
    )
}


export default Payment;