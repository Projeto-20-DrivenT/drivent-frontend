import styled from 'styled-components';
import { useState } from 'react';
import ConfirmedPayment from './ConfirmedPayment';
import PaymentForms from './PaymentForms';

export default function ProcessPayment() {
  const [confirmed, setConfirmed] = useState(false);

  const ticket = { id: 2, TicketType: { price: 2000, isRemote: false, includesHotel: true } }; //FIXME: apagar depois

  return (
    <>
      <Process>
        <h3>Ingresso Escolhido</h3>
        <Card>
          <h4>
            {ticket.TicketType.isRemote ? 'Online':'Presencial'} +  
            {ticket.TicketType.includesHotel ? ' Com hotel':' Sem hotel'} 
          </h4>
          <p>R$ {ticket.TicketType.price/100}</p>
        </Card>
        <h3>Pagamento</h3>
        {confirmed ? <ConfirmedPayment />: <PaymentForms />}        
      </Process>
    </>
  );
}

const Process = styled.div`
    color: #8E8E8E;
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;
    line-height: 23.44px;
`;

const Card = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  margin: 17px 0px;
  background: #FFEED2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 16px;
    line-height: 18.75px;
    color: #454545;
    margin-bottom: 7px;
  }

  p {
    font-size: 14px;
    line-height: 16.75px;
    color: #898989
  }
`;
