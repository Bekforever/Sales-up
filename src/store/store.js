import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import tokenReducer from './reducers/token/tokenSlice'
import { setAutoFreeze } from 'immer'
import { authModel } from './authModel'
import { ordersModel } from './ordersModel'
import { sourceModel } from './sourceModel'
import { usersModel } from './usersModel'

const rootReducer = combineReducers({
	users: usersModel.reducer,
	auth: authModel.reducer,
	orders: ordersModel.reducer,
	source: sourceModel.reducer,
})

const store = configureStore({
	reducer: rootReducer,
})
setAutoFreeze(false)

export default store
