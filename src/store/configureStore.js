import { configureStore } from '@reduxjs/toolkit';
import users from './users';
import error from './middleware/error';

const store = configureStore({
	reducer: {
		users: users.reducer,
	},
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), error],
});

export default store;