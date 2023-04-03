import axios from 'axios';
import store from '../store/configureStore';
import { getUsers } from '../store/users';

export const getData = async () => {
	try {
		const response = await axios.get('https://mioduch.pl/testdata.json');
		store.dispatch(getUsers({ users: response.data }));
	} catch (error) {
		store.dispatch({ type: 'SHOW_ERROR', payload: { error: error.message } });
	}
};

export default getData;