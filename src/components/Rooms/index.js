import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Room from '../Room';
import useToken from '../../hooks/useToken';
import { getRooms } from '../../services/roomApi';

const Rooms = ({ hotelId, selectedRoomId, setSelectedRoomId }) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = useToken();
  async function fetchRooms(id) {
    setIsLoading(true);
    try {
      const data = await getRooms(token, id);
      setRooms(data.Rooms);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRooms(hotelId);
  }, [hotelId]);

  return (
    <>
      <H1>Ótima pedida! Agora escolha seu quarto:</H1>
      <RoomsContainer>
        {isLoading && 'Loading rooms...'}
        {(!isLoading && rooms?.length) ? rooms?.map((room, key) => 
          <Room 
            key={key} 
            room={room} 
            selectedRoomId={selectedRoomId} 
            setSelectedRoomId={setSelectedRoomId} 
          />) : 'Não há quartos cadastrados'
        }
      </RoomsContainer>
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
const RoomsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
  margin-bottom: 18px;
`;

export default Rooms;
