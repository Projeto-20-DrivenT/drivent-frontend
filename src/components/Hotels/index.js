import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel';
import styled from 'styled-components';
import useHotel from '../../hooks/api/useHotel';

const Hotels = ({ selectedHotel, setSelectedHotel, selectedHotelId, setSelectedHotelId, setSelectedRoomId }) => {
  const { hotels, hotelsLoading, /* hotelsError */ } = useHotel();
  const [data, setData] = useState();

  useEffect(() => {
    setData(hotels);
  }, [hotels]);
  return (
    <>
      <H1>Primeiro, escolha seu hotel</H1>
      <HotelsContainer>
        {!hotelsLoading &&
          data?.length &&
          data?.map((hotel, key) => (
            <Hotel key={key} hotel={hotel} selectedHotel={selectedHotel} setSelectedHotel={setSelectedHotel} selectedHotelId={selectedHotelId} setSelectedHotelId={setSelectedHotelId} setSelectedRoomId={setSelectedRoomId} />
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
  flex-wrap: wrap;
  gap: 19px;
  margin-bottom: 33px;
`;

export default Hotels;
