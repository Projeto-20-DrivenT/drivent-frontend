import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRoom from '../../hooks/api/useRoom';

function countRooms(hotel) {
  if (hotel?.Rooms?.length) {
    const capacities = hotel.Rooms.map((room) => room.capacity);
    const singleCount = capacities.filter((capacity) => capacity === 1).length;
    const doubleCount = capacities.filter((capacity) => capacity === 2).length;
    const tripleCount = capacities.filter((capacity) => capacity === 3).length;

    return [singleCount, doubleCount, tripleCount];
  }
  return [0, 0, 0];
}

const Hotel = ({ hotel, selectedHotel, setSelectedHotel, selectedHotelId, setSelectedHotelId, setSelectedRoomId }) => {
  const { rooms, roomsLoading, roomsError } = useRoom(hotel.id);
  let [singleCount, doubleCount, tripleCount] = countRooms(rooms);
  const [types, setTypes] = useState('');

  useEffect(() => {
    [singleCount, doubleCount, tripleCount] = countRooms(rooms);
  }, [rooms]);

  useEffect(() => {
    let strTypes = '';

    if (singleCount > 0) {
      strTypes += 'Single';
    }

    if (doubleCount > 0) {
      strTypes += singleCount > 0 ? ' e Double' : 'Double';
    }

    if (tripleCount > 0) {
      strTypes += singleCount > 0 || doubleCount > 0 ? ' e Triple' : 'Triple';
    }

    setTypes(strTypes);
  }, [singleCount, doubleCount, tripleCount]);

  const handleClick = () => {
    if (selectedHotelId !== hotel?.id) {
      setSelectedHotel({ ...rooms });
      setSelectedHotelId(hotel.id);
      setSelectedRoomId(undefined);
    }
    return;
  };

  return (
    <HotelContainer onClick={handleClick} selected={selectedHotelId === hotel?.id} >
      <Img src={hotel?.image} />
      <div>
        <H1>{hotel?.name}</H1>
      </div>
      <div>
        <H2>Tipos de acomodação:</H2>
        <P>{types}</P>
      </div>
      <div>
        <H2>Vagas disponíveis:</H2>
        <P>{hotel?.vacancies}</P>
      </div>
    </HotelContainer>
  );
};

const HotelContainer = styled.div`
  width: 196px;
  height: 264px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  div {
    width: calc(100% - 28px);
    margin: 0 14px;
  }
`;
const Img = styled.img`
  width: 168px;
  height: 109px;
  border-radius: 5px;
`;
const H1 = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  color: #343434;
`;
const H2 = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 14.06px;
  color: #3c3c3c;
`;
const P = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 14.06px;
  color: #3c3c3c;
`;

export default Hotel;
