import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	orders: [],
}

export const { reducer, actions: reducerActions } = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		fetchOrders: (state, action) => {
			state.orders = action.payload
		},
		// changeStatus: (state, action) => {
		// 	state.users = action.payload;
		// }
	},
})
export const actions = {
	...reducerActions,
}
