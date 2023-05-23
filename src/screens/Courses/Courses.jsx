import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import axiosBasic from '../../services/axios/axiosBasic'
import ActionsTable from './ActionsTable/ActionsTable'
import './Courses.scss'

const Courses = () => {
	const [allCourses, setAllCourses] = useState([])
	useEffect(() => {
		axiosBasic
			.get('/courses', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => setAllCourses(res.data.data))
	}, [])

	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>№</TableCell>
							<TableCell>Название курса</TableCell>
							<TableCell>Описание</TableCell>
							<TableCell>Цена</TableCell>
							<TableCell>Кликнул</TableCell>
							<TableCell>Действия</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{allCourses.map(row => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.id}
								</TableCell>
								<TableCell>{row.title}</TableCell>
								<TableCell>{row.description}</TableCell>
								<TableCell>{row.price}</TableCell>
								<TableCell>{row.clicked}</TableCell>
								<TableCell>
									<ActionsTable />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default Courses
