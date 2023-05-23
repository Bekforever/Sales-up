import { Button, IconButton, TextField } from '@mui/material'
import { DatePicker } from 'antd/lib'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axiosBasic from '../../../services/axios/axiosBasic'
const { RangePicker } = DatePicker

const Filter = ({ isFiltered, setIsFiltered }) => {
	const [nameSearch, setNameSearch] = useState('')
	const [phoneSearch, setPhoneSearch] = useState('')
	const [dateFrom, setDateFrom] = useState(undefined)
	const [dateTo, setDateTo] = useState(undefined)
	const dispatch = useDispatch()

	useEffect(() => {
		if (nameSearch || phoneSearch || dateFrom || dateTo) {
			setIsFiltered(1)
			axiosBasic
				.get(
					`/leads?name=${nameSearch}&phone=${phoneSearch}&from=${dateFrom}&to=${dateTo}&limit=10000`,
					{
						headers: {
							Authorization: 'Bearer ' + localStorage.getItem('token'),
						},
					}
				)
				.then(res => console.log(res))
			//dispatch(usersModel.actions.fetchUsers(res.data.data))
		}
	}, [nameSearch, phoneSearch, dateFrom, dateTo])

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
		setNameSearch('')
		setPhoneSearch('')
	}
	return (
		<>
			<div className='leads__wrapper p-5'>
				<div className='search flex items-center gap-5 mb-2'>
					<label>
						<TextField
							value={nameSearch}
							onChange={e => setNameSearch(e.target.value)}
							id='outlined-basic'
							label='Name'
							variant='outlined'
						/>
					</label>
					<label>
						<TextField
							value={phoneSearch}
							onChange={e => setPhoneSearch(e.target.value)}
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
						<IconButton aria-label='delete'>
							<i className='bx bxl-telegram'></i>
						</IconButton>
					</div>
				</div>
			</div>
		</>
	)
}

export default Filter
