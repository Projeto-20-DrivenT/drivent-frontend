import React from 'react';
import Hotel from '../Hotel';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import styled from 'styled-components';

const hotels = [
  {
    id: 1,
    name: 'Driven Resort',
    image: image1,
    Rooms: [
      { name: 101, capacity: 1 },
      { name: 102, capacity: 2 },
    ],
    vacancies: 103,
  },
  {
    id: 2,
    name: 'Driven Palace',
    image: image2,
    Rooms: [
      { name: 201, capacity: 1 },
      { name: 202, capacity: 2 },
      { name: 203, capacity: 3 },
    ],
    vacancies: 25,
  },
  {
    id: 3,
    name: 'Driven World',
    image: image3,
    Rooms: [
      { name: 301, capacity: 1 },
      { name: 302, capacity: 2 },
    ],
    vacancies: 2,
  },
];

const Hotels = ({ selectedHotel, setSelectedHotel }) => {
  return (
    <>
      <H1>Primeiro, escolha seu hotel</H1>
      <HotelsContainer>
        {hotels.map((hotel, key) => (
          <Hotel key={key} hotel={hotel} selectedHotel={selectedHotel} setSelectedHotel={setSelectedHotel} />
        ))}
      </HotelsContainer>
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
const HotelsContainer = styled.div`
  display: flex;
  gap: 19px;
`;

export default Hotels;
