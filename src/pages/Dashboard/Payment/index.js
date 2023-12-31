import styled from 'styled-components';
import Ticket from '../../../components/Ticket';
import { Typography } from '@material-ui/core';
import useEnrollment from '../../../hooks/api/useEnrollment';
import ProcessPayment from '../../../components/ProcessPayment/ProcessPayment';
import useGetTicket from '../../../hooks/api/useGetTicket';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const { ticket } = useGetTicket();

  if(ticket) {
    return (
      <>
        <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
        <ProcessPayment ticket={ticket} />
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

export const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

export const Message = styled.div`
  color: #8E8E8E;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
