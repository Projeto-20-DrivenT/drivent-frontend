import React from 'react';
import useTicket from '../../../hooks/useTicket.js';
import { Message, StyledTypography } from '../Payment/index.js';
import styled from 'styled-components';

export default function Activities() {
  const { ticketData } = useTicket(); // alterar para  const { ticket } = useGetTicket();

  const dataForTest = {
    status: 'PAID',
    TicketType: {
      isRemote: false
    }
  };

  let message;
  function checkDetails(detail) {
    if (detail?.status !== 'PAID') {
      message = 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades';
      return true;
    }
    else if (detail?.TicketType?.isRemote) {
      message = 'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.';
      return true;
    }
    return false;
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de Atividades</StyledTypography>
      {
        checkDetails(dataForTest) ? ( //alterar para checkDetails(ticket)
          <Message>{message}</Message>
        ) : <Container>teste</Container>
      }
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
