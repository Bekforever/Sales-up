import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	users: [],
	loading: false,
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetchUsers: (state, action) => {
			console.log(state)
		},
	},
})

export default usersSlice.reducer
