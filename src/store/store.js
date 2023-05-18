import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/users/users.slice'

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
})
