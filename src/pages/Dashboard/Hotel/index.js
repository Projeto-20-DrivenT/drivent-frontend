import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Hotels from '../../../components/Hotels';
import useTicket from '../../../hooks/useTicket';
import { useState } from 'react';
import Rooms from '../../../components/Rooms';

export default function Hotel() {
  const { tickets } = useTicket();
  const [selectedHotel, setSelectedHotel] = useState({ id: undefined, Rooms: [] });

  const ticket1 = undefined;
  const ticket2 = { isRemote: false, status: 'RESERVED' };
  const ticket3 = { isRemote: true, status: 'RESERVED' };
  const ticket4 = { isRemote: false, status: 'PAID' };
  const ticket5 = { isRemote: true, status: 'PAID' };

  const ticket = ticket5;

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {!(ticket?.status === 'PAID') && (
        <Message>
          Você precisa ter confirmado pagamento antes <br />
          de fazer a escolha de hospedagem
        </Message>
      )}
      {ticket?.status === 'PAID' && !ticket?.isRemote && (
        <Message>
          Sua modalidade de ingresso não inclui hospedagem <br />
          Prossiga para a escolha de atividades
        </Message>
      )}
      {ticket?.status === 'PAID' && ticket?.isRemote && (
        <Hotels selectedHotel={selectedHotel} setSelectedHotel={setSelectedHotel} />
      )}
      {ticket?.status === 'PAID' && ticket?.isRemote && selectedHotel.id && <Rooms rooms={selectedHotel.Rooms} />}
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
