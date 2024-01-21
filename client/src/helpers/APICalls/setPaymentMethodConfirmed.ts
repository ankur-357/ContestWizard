import { AuthApiDataSuccess } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const setPaymentMethodConfirmed = async (confirmed: boolean): Promise<AuthApiDataSuccess> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`http://react-contest.onrender.com/users/confirm-payment-method/${confirmed ? '1' : '0'}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default setPaymentMethodConfirmed;
