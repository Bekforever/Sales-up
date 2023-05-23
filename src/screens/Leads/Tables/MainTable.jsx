import { TablePagination } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axiosBasic from '../../../services/axios/axiosBasic'
import ActionsRow from '../ActionsRow/ActionsRow'
import CustomTableRow from '../TableRow'

const MainTable = ({ page, setPage, rowsPerPage, setRowsPerPage }) => {
	const [usersNumber, setUsersNumber] = useState(0)

	const users = useSelector(state => state.users.users)

	// total users number for pagination
	useEffect(() => {
		axiosBasic
			.get('/leads?limit=100000', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => setUsersNumber(res.data.total))
	}, [])

	// pagination
	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}
	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
					<TableHead>
						<TableRow>
							<TableCell>№</TableCell>
							<TableCell align='left'>ФИО</TableCell>
							<TableCell align='left'>Телефон</TableCell>
							<TableCell align='left'>Статус</TableCell>
							<TableCell align='left'>Комментарий</TableCell>
							<TableCell align='left'>Действия</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users &&
							users.map(item => (
								<TableRow
									key={item.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component='th' scope='row'>
										{item.id}
									</TableCell>
									<TableCell align='left'>{item.name}</TableCell>
									<TableCell align='left'>{item.phone}</TableCell>
									<CustomTableRow user={item} />
									<TableCell align='left'>{item.comment}</TableCell>
									<TableCell align='left'>
										<ActionsRow />
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component='div'
				count={usersNumber}
				rowsPerPage={rowsPerPage}
				page={+page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</>
	)
}

export default MainTable
