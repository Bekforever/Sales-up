import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	courses: [],
}

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		addCategory: (state, action) => {
			console.log(action.payload)
		},
		editCategory: (state, action) => {
			console.log(action.payload)
		},
		removeCategory: (state, action) => {
			console.log(action.payload)
		},
	},
})

export const {addCategory, editCategory, removeCategory} = coursesSlice.actions
export default coursesSlice.reducer