import { useContext } from 'react';
import TicketContext from '../contexts/TicketContext';

export default function useTicket() {
  return useContext(TicketContext);
}
