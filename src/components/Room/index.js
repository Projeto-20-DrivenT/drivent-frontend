import React from 'react';
import styled from 'styled-components';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';

const Room = ({ room }) => {
  return (
    <RoomContainer>
      <H1>{room.name}</H1>
      <span>
        <BsPerson />
        <BsFillPersonFill color="#CECECE" />
        <BsFillPersonFill color="#000" />
      </span>
    </RoomContainer>
  );
};

const RoomContainer = styled.div`
  width: 190px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #cecece;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const H1 = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 23.44px;
`;

export default Room;
