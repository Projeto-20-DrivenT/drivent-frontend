import { createContext, useState } from 'react';

const HotelContext = createContext();
export default HotelContext;

export function HotelProvider({ children }) {
  const [selectedHotel, setSelectedHotel] = useState({ id: undefined, Rooms: [] });
  const [selectedHotelId, setSelectedHotelId] = useState(undefined);
  const [selectedRoomId, setSelectedRoomId] = useState(undefined);
  
  return (
    <HotelContext.Provider value={{ 
      selectedHotel, setSelectedHotel, 
      selectedHotelId, setSelectedHotelId, 
      selectedRoomId, setSelectedRoomId 
    }}>
      {children}
    </HotelContext.Provider>
  );
}
