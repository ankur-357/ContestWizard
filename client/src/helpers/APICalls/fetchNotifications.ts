import { FetchOptions } from '../../interface/FetchOptions';
import { Notification } from '../../interface/Notifications';

export async function fetchNotifications(): Promise<Notification[]> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`https://react-contest.onrender.com/notifications`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
