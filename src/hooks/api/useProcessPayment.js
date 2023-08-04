import useAsync from '../useAsync';
import useToken from '../useToken';
import * as paymentApi from '../../services/paymentApi.js';

export default function useProcessPayment() {
  const token = useToken();
    
  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: processPayment
  } = useAsync((data) => paymentApi.postPayment(data, token), false);
  
  return {
    payment,
    paymentLoading,
    paymentError,
    processPayment
  };
};
