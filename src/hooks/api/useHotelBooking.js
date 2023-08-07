import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelBookingApi from '../../services/hotelBookingApi';

export default function useHotelBooking(roomId) {
  const token = useToken();

  const {
    data: hotelBookings,
    loading: hotelBookingsLoading,
    error: hotelBookingsError,
    act: getHotelBookings,
  } = useAsync(() => hotelBookingApi.getHotelBookings(token, roomId));

  return {
    hotelBookings,
    hotelBookingsLoading,
    hotelBookingsError,
    getHotelBookings,
  };
}
