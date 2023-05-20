import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './reducers/token/tokenSlice'
import usersReducer from './reducers/users/users.slice'

export const store = configureStore({
	reducer: {
		users: usersReducer,
		token: tokenReducer,
	},
})
