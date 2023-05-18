import axios from 'axios'

export const UsersService = {
	async fetchAll() {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users`
		)

		return response.data
	},
}
