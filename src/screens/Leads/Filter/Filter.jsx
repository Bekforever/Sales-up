import { Button, IconButton, TextField } from '@mui/material'
import { Popover } from 'antd'
import { DatePicker } from 'antd/lib'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import axiosBasic from '../../../services/axios/axiosBasic'
const { RangePicker } = DatePicker

const Filter = ({ name, setName, phone, setPhone, setDateFrom, setDateTo }) => {
	const [messageToAll, setMessageToAll] = useState({ text: '' })
	const [open, setOpen] = useState(false)

	const send = () => {
		setOpen(false)
		console.log(messageToAll)
		axiosBasic
			.post('/sendmsgall', messageToAll, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => console.log(res))
	}

	const handleOpenChange = newOpen => {
		setOpen(newOpen)
	}

	const content = () => (
		<div className='flex flex-col gap-y-5'>
			<textarea
				value={messageToAll.text}
				onChange={e => setMessageToAll({ text: e.target.value })}
				rows={4}
				type='text'
				className='border-[1px] border-black py-2 px-4 rounded-md min-h-[100px] resize-none'
			/>
			<a className='text-[#1677ff]' onClick={send}>
				Send
			</a>
		</div>
	)

	// date picker
	const onRangeChange = (dates, dateStrings) => {
		if (dates) {
			setDateFrom(dateStrings[0])
			setDateTo(dateStrings[1])
			console.log('From: ', dates[0], ', to: ', dates[1])
			console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
		} else {
			console.log('Clear')
		}
	}
	const rangePresets = [
		{
			label: 'Last 7 Days',
			value: [dayjs().add(-7, 'd'), dayjs()],
		},
		{
			label: 'Last 14 Days',
			value: [dayjs().add(-14, 'd'), dayjs()],
		},
		{
			label: 'Last 30 Days',
			value: [dayjs().add(-30, 'd'), dayjs()],
		},
		{
			label: 'Last 90 Days',
			value: [dayjs().add(-90, 'd'), dayjs()],
		},
	]

	const clearValues = () => {
		setName('')
		setPhone('')
	}

	return (
		<>
			<div className='leads__wrapper p-5'>
				<div className='search flex items-center gap-5 mb-2'>
					<label>
						<TextField
							value={name}
							onChange={e => setName(e.target.value)}
							id='outlined-basic'
							label='Name'
							variant='outlined'
						/>
					</label>
					<label>
						<TextField
							value={phone}
							onChange={e => setPhone(e.target.value)}
							id='outlined-basic'
							label='Phone'
							variant='outlined'
						/>
					</label>
					<label>
						<RangePicker
							className='px-4 py-4'
							presets={rangePresets}
							onChange={onRangeChange}
						/>
					</label>
					<div>
						<Button type={'text'} onClick={clearValues}>
							Clear
						</Button>
						<Popover
							content={content}
							title='Send message to all'
							trigger='click'
							open={open}
							onOpenChange={handleOpenChange}
						>
							<IconButton aria-label='delete'>
								<i className='bx bxl-telegram'></i>
							</IconButton>
						</Popover>
					</div>
				</div>
			</div>
		</>
	)
}

export default Filter
