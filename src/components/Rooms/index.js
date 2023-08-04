import React from 'react';
import styled from 'styled-components';
import Room from '../Room';

const Rooms = ({ rooms }) => {
  return (
    <>
      <H1>Ótima pedida! Agora escolha seu quarto:</H1>
      <RoomsContainer>
        {rooms.map((room, key) => (
          <Room key={key} room={room} />
        ))}
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
`;

export default Rooms;
