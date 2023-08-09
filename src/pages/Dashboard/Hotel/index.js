import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Hotels from '../../../components/Hotels';
import { useState } from 'react';
import Rooms from '../../../components/Rooms';
import useGetTicket from '../../../hooks/api/useGetTicket';
import { bookingRoom } from '../../../services/bookingApi';
import useToken from '../../../hooks/useToken';
import useMyBooking from '../../../hooks/api/useMyBooking';
import { useEffect } from 'react';
import MyRoom from '../../../components/MyRoom';
import usehotelContext from '../../../hooks/useHotelContext';

export default function Hotel() {
  const { selectedHotelId, selectedRoomId } = usehotelContext();
  const { ticket, ticketLoading } = useGetTicket();
  const { myBooking, myBookingLoading } = useMyBooking();
  const [isBooking, setIsBooking] = useState(false);
  const [hasBooking, setHasBooking] = useState(false);

  const token = useToken();

  async function handleClick() {
    setIsBooking(true);
    const body = { roomId: selectedRoomId };
    try {
      await bookingRoom(token, body);
      window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setIsBooking(false);
    }
  }

  useEffect(() => {
    myBooking?.id && setHasBooking(true);
  }, [myBooking]);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {(ticketLoading || myBookingLoading) && 'Loading'}
      {!myBookingLoading ? hasBooking ? <MyRoom room={myBooking?.Room}/> : 
        <> 
          {!ticketLoading && !(ticket?.status === 'PAID') && (
            <Message>
              Você precisa ter confirmado pagamento antes <br />
              de fazer a escolha de hospedagem
            </Message>
          )}
          {!ticketLoading && ticket?.status === 'PAID' && (ticket?.TicketType?.isRemote || !ticket?.TicketType?.includesHotel) && (
            <Message>
              Sua modalidade de ingresso não inclui hospedagem <br />
              Prossiga para a escolha de atividades
            </Message>
          )}
          {!ticketLoading && ticket?.status === 'PAID' && (!ticket?.TicketType?.isRemote && ticket?.TicketType?.includesHotel) && (
            <Hotels />
          )}
          {!ticketLoading && ticket?.status === 'PAID' && (!ticket?.TicketType?.isRemote && ticket?.TicketType?.includesHotel) && selectedHotelId && 
            <Rooms />
          }
          {!ticketLoading && ticket?.status === 'PAID' && (!ticket?.TicketType?.isRemote && ticket?.TicketType?.includesHotel) && selectedHotelId && selectedRoomId && 
            <BookingButton onClick={handleClick} disabled={isBooking}>RESERVAR QUARTO</BookingButton>
          }
        </>
        : ''
      }
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

const BookingButton = styled.button`
  background-color: #e0e0e0;
  border-radius: 4px;
  border: 0;
  width: 182px;
  height: 37px;
  box-shadow: 0px 2px 10px 0px #00000040;

`;
