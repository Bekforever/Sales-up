import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: '' }

const tokenSlice = createSlice({
	name: 'tokenSlice',
	initialState,
	reducers: {
		addToken: (state, action) => {
			localStorage.setItem('token', action.payload)
		},
		removeToken: (state, action) => {
			console.log(state)
			console.log(action)
		},
	},
})

export const { addToken, removeToken } = tokenSlice.actions
export default tokenSlice.reducer
