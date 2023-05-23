import { Button } from 'antd/lib'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axiosBasic from '../../services/axios/axiosBasic'
import './Auth.scss'
import { authModel } from '../../store/authModel'

const Auth = () => {
	const [currentUser, setCurrentUser] = useState({
		phone: '',
		password: '',
	})
	const navigate = useNavigate()
	const dispatch = useDispatch()
	// check
	useEffect(() => {
		const tokenToCheck = localStorage.getItem('token')
		axiosBasic
			.post('/auth/check', tokenToCheck, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => {
				navigate('/', { replace: true })
			})
			.catch(err => console.log(err))
	}, [])

	// on click submit button
	const login = e => {
		e.preventDefault()
		axiosBasic
			.post('/auth/login', currentUser)
			.then(res => {
				dispatch(authModel.actions.addToken(res.data.data.token))
				navigate('/', { replace: true })
			})
			.catch(e => console.log(e))
	}

	return (
		<div className='form__wrapper'>
			<form className='form'>
				<h1>Login</h1>
				<input
					type='text'
					placeholder='Enter your phone number'
					onChange={e =>
						setCurrentUser({ ...currentUser, phone: e.target.value })
					}
					className='number'
				/>
				<input
					type='password'
					placeholder='Enter your password'
					onChange={e =>
						setCurrentUser({ ...currentUser, password: e.target.value })
					}
					className='password'
				/>

				<Button
					className='w-full px-4 py-2 h-fit text-lg'
					style={{ backgroundColor: '#1976D2' }}
					type='primary'
					onClick={e => login(e)}
				>
					Submit
				</Button>
			</form>
		</div>
	)
}

export default Auth
