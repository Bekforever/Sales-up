import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosBasic from '../../services/axios/axiosBasic'

const Home = () => {
	const navigate = useNavigate()
	// check
	const tokenToCheck = localStorage.getItem('token')
	useEffect(() => {
		axiosBasic
			.post('/auth/check', tokenToCheck, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.catch(() => navigate('/auth', { replace: true }))
	}, [tokenToCheck])
	return <div></div>
}

export default Home
