import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: '' }

export const { reducer, actions: reducerActions } = createSlice({
	name: 'token',
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

export const actions = {
	...reducerActions,
}

