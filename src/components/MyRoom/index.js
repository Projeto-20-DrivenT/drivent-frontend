import React from 'react';
import styled from 'styled-components';
import useHotel from '../../hooks/api/useHotel';
import useBooking from '../../hooks/api/useBooking';
import usehotelContext from '../../hooks/useHotelContext';

const MyRoom = ({ room }) => {
  const { setChangeRoom } = usehotelContext();
  const { hotels, /* hotelsLoading, hotelsError */ } = useHotel();
  const { bookings } = useBooking(room.id);
  const myHotel = hotels?.filter(hotel => hotel.id === room.hotelId)[0];
  
  function getRoomType(capacity) {
    if (capacity === 1) {
      return 'Single';
    } else if (capacity === 2) {
      return 'Double';
    } else if (capacity === 3) {
      return 'Triple';
    } else {
      return 'Outro tipo de quarto';
    }
  };

  function handleClick() {
    setChangeRoom(true);
  }
  return (
    <>
      <H1>Você já escolheu seu quarto:</H1>
      <MyRoomContainer>
        <img src={myHotel?.image} alt={myHotel?.name} />
        <div><h2>{myHotel?.name}</h2></div>
        <div>
          <h3>Quarto reservado</h3>
          <h4>{room.name} ({getRoomType(room.capacity)})</h4>
        </div>
        <div>
          <h3>Pessoas no seu quarto</h3>
          <h4>{bookings?.length === 1 ? 'Você' : `Você e mais ${bookings?.length -1}`}</h4>
        </div>
      </MyRoomContainer>
      <Button onClick={handleClick}>TROCAR DE QUARTO</Button>
    </>
  );
};

const H1 = styled.h1`
  color: #8e8e8e;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  margin-bottom: 18px;
`;

const MyRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 18px;
  width: 196px;
  height: 264px;
  background-color: #FFEED2;
  border-radius: 10px;

  img {
    width: 168px;
    height: 109px;
  }

  h2 {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 400;
    line-height: 23.44px;
  }
  
  h3 {
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
  }
  h4 {
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 400;
    line-height: 14.06px;
  }

  div {
    width: calc(100% - 28px);
  }
`;

const Button = styled.button`
  width: 182px;
  height: 37px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 2px 10px 0px #00000040;
  background-color: #E0E0E0;
`;
export default MyRoom;
