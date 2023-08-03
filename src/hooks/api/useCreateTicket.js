import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useCreateTicket() {
  const token = useToken();
  
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: createTicket
  } = useAsync((data) => ticketApi.createTicket(data, token), false);

  return {
    ticket,
    ticketLoading,
    ticketError,
    createTicket
  };
}
