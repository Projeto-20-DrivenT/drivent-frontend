import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useBooking(roomId) {
  const token = useToken();

  const {
    data: bookings,
    loading: bookingsLoading,
    error: bookingsError,
    act: getBookings,
  } = useAsync(() => bookingApi.getBookings(token, roomId));

  return {
    bookings,
    bookingsLoading,
    bookingsError,
    getBookings,
  };
}
