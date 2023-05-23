import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	source: [],
}

export const { reducer, actions: reducerActions } = createSlice({
	name: 'source',
	initialState,
	reducers: {
		fetchSource: (state, action) => {
			state.source = action.payload
		},
	},
})

export const actions = {
	...reducerActions,
}
