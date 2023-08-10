import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';
import useBooking from '../../hooks/api/useBooking';
import usehotelContext from '../../hooks/useHotelContext';

const Room = ({ room }) => {
  const { selectedRoomId, setSelectedRoomId } = usehotelContext();
  const { bookings } = useBooking(room.id);
  const [books, setBooks] = useState(0);
  const [full, setFull] = useState(false);
  useEffect(() => {
    bookings?.length && setBooks(bookings.length);
  }, [bookings]);

  useEffect(() => {
    setFull(books >= room.capacity);
  }, [books]);

  const handleClick = () => {
    !full && setSelectedRoomId(room.id);
  };

  return (
    <RoomContainer full={full} disabled={full} onClick={handleClick} selected={room.id === selectedRoomId}>
      <H1>{room.name}</H1>
      <IconContainer>
        {full ? (
          <span>
            {Array.from({ length: books }, (_, index) => (
              <BsFillPersonFill key={index} color="#8C8C8C" />
            ))}
          </span>
        ) : (
          <span>
            {room.id !== selectedRoomId ? Array.from({ length: room.capacity - books }, (_, index) => (
              <BsPerson key={index} color="#000" />
            )) : Array.from({ length: room.capacity - books }, (_, index) => (
              index === room.capacity - books -1 ?
                <BsFillPersonFill key={index} color='#FF4791' /> :
                <BsPerson key={index} color="#000" />
            ))}
            {Array.from({ length: books }, (_, index) => (
              <BsFillPersonFill key={index} color="#000" />
            ))}
          </span>
        )}
      </IconContainer>
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
  background-color: ${(props) => (props.full ? '#E9E9E9' : props.selected ? '#FFEED2' : '#fff')};
`;

const H1 = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 23.44px;
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;

export default Room;
