import { useState, createContext } from 'react';
//import useGetTicket from '../hooks/api/useGetTicket';

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [ticketData, setTicketData] = useState({});
  
  //const { ticket } = useGetTicket();

  // useEffect(() => {
  //   if (ticket) {
  //     setTicketData(ticket);
  //   }
  // }, [ticket]);

  // function updateTicket() {
  //   const { ticket } = useGetTicket();

  //   useEffect(() => {
  //     if (ticket) {
  //       setTicketData(ticket);
  //     }
  //   }, [ticket]);
  // }

  return (
    <TicketContext.Provider value={{ ticketData, setTicketData }}>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketContext;
