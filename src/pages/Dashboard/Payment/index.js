import styled from 'styled-components';
import Ticket from '../../../components/Ticket';
import { Typography } from '@material-ui/core';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { useState } from 'react';
import ProcessPayment from '../../../components/ProcessPayment/ProcessPayment';

export default function Payment() {
  const { enrollment } = useEnrollment();

  const [reservedTicket, setReservedTicket] = useState(null); //TODO: 

  if(reservedTicket !== null) {
    return (
      <>
        <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
        <ProcessPayment />
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {enrollment ? <Ticket/> : 
        <Message>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</Message>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Message = styled.div`
  color: #8E8E8E;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
