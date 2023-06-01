import moment from 'moment/moment.js'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosBasic from '../../../services/axios/axiosBasic.js'
import { botsModel } from '../../../store/settingsModel/bot/index.js'

const Bot = () => {
	const [render, setRender] = useState(0)
	const [formattedDate, setFormattedDate] = useState('')
	const bot = useSelector(state => state.bots.bots)
	const dispatch = useDispatch()

	useEffect(() => {
		bot
			? setFormattedDate(moment(bot.date).format('DD/MM/YYYY, h:mm:ss'))
			: setFormattedDate('')
	}, [])

	const removeBot = () => {
		axiosBasic
			.delete(`/bots/${bot.id}`, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => {
				console.log(res.data)
				dispatch(botsModel.actions.removeBot(bot.id))
				setRender(render + 1)
			})
	}

	return (
		<div className='flex-1 flex flex-col bg-white rounded-md shadow-md min-h-[200px] p-5'>
			{bot ? (
				<table className='flex flex-col gap-y-5 py-3'>
					<thead className='border-b-[1px] border-[#adadad] text-2xl'>
						<tr>
							<th className='font-normal'>Бот</th>
						</tr>
					</thead>
					<tbody>
						<tr className='flex justify-start items-start mb-5'>
							<td className='flex-1'>BOT</td>
							<td className='flex-1 text-right'>{bot.username}</td>
						</tr>
						<tr className='flex justify-start items-start mb-5'>
							<td className='flex-1'>ID</td>
							<td className='flex-1 text-right'>{bot.id}</td>
						</tr>
						<tr className='flex  justify-start items-start mb-5'>
							<td className='flex-1'>Contact</td>
							<td className='flex-1 text-right'>{bot.contact}</td>
						</tr>
						<tr className='flex justify-start items-start mb-5'>
							<td className='flex-1'>Created</td>
							<td className='flex-1 text-right'>{formattedDate}</td>
						</tr>
						<tr>
							<td>
								<button
									onClick={removeBot}
									className='text-red-500 font-semibold'
								>
									DELETE
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			) : (
				''
			)}
		</div>
	)
}

export default Bot
