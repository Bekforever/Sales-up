import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import tokenReducer from './reducers/token/tokenSlice'
import { setAutoFreeze } from 'immer'
import { authModel } from './authModel'
import { ordersModel } from './ordersModel'
import { statusesModel } from './settingsModel/statuses'
import { sourceModel } from './sourceModel'
import { toolsModel } from './toolsModel'
import { usersModel } from './usersModel'
import { courseModel } from './courseModel'

const rootReducer = combineReducers({
	users: usersModel.reducer,
	auth: authModel.reducer,
	orders: ordersModel.reducer,
	source: sourceModel.reducer,
	tools: toolsModel.reducer,
	statuses: statusesModel.reducer,
	courses: courseModel.reducer
})

const store = configureStore({
	reducer: rootReducer,
})
setAutoFreeze(false)

export default store
