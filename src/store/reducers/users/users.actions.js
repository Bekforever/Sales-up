import { createAsyncThunk } from '@reduxjs/toolkit'
import { UsersService } from '../../../services/users/users.service'

export const fetchUsers = createAsyncThunk(
	'users/fetch',
	async ({ users }, thunkApi) => {
		try {
			return await UsersService.fetchAll(users)
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
