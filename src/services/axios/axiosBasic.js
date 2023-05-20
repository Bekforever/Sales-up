import axios from 'axios'

const axiosBasic = axios.create({
	baseURL: 'https://test.sales-up.uz/api',
})

export default axiosBasic
