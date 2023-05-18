import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from './users.actions'

const initialState = {
	users: [],
	loading: false,
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.loading = true
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				console.log(action)
				state.loading = false
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				console.log(action)
				state.loading = false
			})
	},
})

export default usersSlice.reducer
