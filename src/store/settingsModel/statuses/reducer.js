import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	statuses: [],
}

export const { reducer, actions: reducerActions } = createSlice({
	name: 'statuses',
	initialState,
	reducers: {
		fetchStatuses: (state, action) => {
			state.source = action.payload
		},
	},
})

export const actions = {
	...reducerActions,
}
