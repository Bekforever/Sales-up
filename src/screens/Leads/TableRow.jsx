import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosBasic from '../../services/axios/axiosBasic'
import { usersModel } from '../../store/usersModel'

const CustomTableRow = ({ user }) => {
	const [status, setStatus] = useState('')
	const dispath = useDispatch()
	const [allStatuses, setAllStatuses] = useState([])
	const stateUsers = useSelector(state => state.users.users)

	useEffect(() => {
		axiosBasic
			.get('/statuses', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => {
				setAllStatuses(res.data.data)
			})
	}, [])

	const handleChange = event => {
		setStatus(event.target.value)
		// const [updatedUser, setUpdatedUser] = useState({})
		// const [id, setId] = useState(0)
		// allStatuses.map(i => {
		// 	i.name === status ? setId(i.id) : ''
		// })
		const updatedUsers = stateUsers.map(stateUser => {
			if (stateUser.id === user.id) {
				return { ...stateUser, status: status }
			}
			return stateUser
			// 	setUpdatedUser({
			// 		...stateUser,
			// 		status_id: id,
			// 	})
			// }
			// axios
			// 	.put(`/leads/${user.id}?status_id=${id}`, updatedUser, {
			// 		headers: {
			// 			Authorization: 'Bearer ' + localStorage.getItem('token'),
			// 		},
			// 	})
			// 	.then(res => console.log(res))
			// return updatedUser
		})
		dispath(usersModel.actions.changeStatus(updatedUsers))
	}

	return (
		<TableCell align='right'>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<FormControl>
					<InputLabel id='demo-simple-select-label'>{status}</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={status}
						label={status}
						onChange={handleChange}
					>
						{allStatuses.map(s => (
							<MenuItem key={s.id} value={s.name}>
								{s.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</TableCell>
	)
}

export default CustomTableRow
