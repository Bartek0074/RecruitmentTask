import { createSlice } from '@reduxjs/toolkit';

const users = createSlice({
	name: 'users',
	initialState: [],
	reducers: {
		getUsers: (state, action) => {
			return action.payload.users;
		},
		editNames: (state, action) => {
			const { id, index, value } = action.payload;

			state[id].data[index].name = value;
		},
		editSurnames: (state, action) => {
			const { id, index, value } = action.payload;

			state[id].data[index].surname = value;
		},
	},
});

export const { getUsers, editNames, editSurnames } = users.actions;

export default users;