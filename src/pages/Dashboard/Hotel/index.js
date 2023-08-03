import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import { Typography } from '@material-ui/core';
import Hotels from '../../../components/Hotels';

export default function Hotel() {
  const { tickets } = useTicket();
  const ticket = undefined;
  const isRemote = true;

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {!(ticket?.status === 'PAID') && (
        <Message>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Message>
      )}
      {}
      {ticket?.status === 'PAID' && <Hotels />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Message = styled.div`
  color: #8e8e8e;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
