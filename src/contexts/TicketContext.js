import { useState, createContext } from 'react';

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [ticketData, setTicketData] = useState({});
  
  return (
    <TicketContext.Provider value={{ ticketData, setTicketData }}>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketContext;
