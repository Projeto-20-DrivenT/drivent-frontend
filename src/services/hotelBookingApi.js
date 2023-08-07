import api from './api';

export async function getHotelBookings(token, hotelId) {
  const response = await api.get(`/booking/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
