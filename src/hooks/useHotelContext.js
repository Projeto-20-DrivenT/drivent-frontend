import { useContext } from 'react';
import hotelContext from '../contexts/HotelContext';

export default function usehotelContext() {
  return useContext(hotelContext);
}
