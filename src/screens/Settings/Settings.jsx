import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axiosBasic from '../../services/axios/axiosBasic'
import { statusesModel } from '../../store/settingsModel/statuses'
import './Settings.scss'
import Status from './statuses/Status.jsx'
import Create from './bot/create/Create'
import Bot from './bot/Bot'


const Settings = () => {
	const dispatch = useDispatch()
	const [renderStatus, setRenderStatus] = useState(0)

	useEffect(() => {
		axiosBasic
			.get('/statuses', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => {
				dispatch(statusesModel.actions.fetchStatuses(res.data.data))
			})
	}, [renderStatus])

	return (
		<div className='flex items-start justify-around gap-5 p-5'>
			<Status renderStatus={renderStatus} setRenderStatus={setRenderStatus} />
			<Bot />
			<Create />
		</div>
	)
}

export default Settings
