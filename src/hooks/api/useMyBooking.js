import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useMyBooking() {
  const token = useToken();

  const {
    data: myBooking,
    loading: myBookingLoading,
    error: myBookingError,
    act: getMyBooking,
  } = useAsync(() => bookingApi.getMyBooking(token));

  return {
    myBooking,
    myBookingLoading,
    myBookingError,
    getMyBooking,
  };
}
