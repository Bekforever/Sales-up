import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosBasic from '../../services/axios/axiosBasic'
import { sourceModel } from '../../store/sourceModel'
import Actions from './Actions/Actions'
import './Source.scss'

const Source = () => {
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()
	const [page, setPage] = useState(1)
	const [rowsPerPage, setRowsPerPage] = useState(10)
	const srcs = useSelector(store => store.source.source)
	console.log(srcs)

	//table
	useEffect(() => {
		setLoading(true)
		axiosBasic
			.get(`/sources`, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => {
				dispatch(sourceModel.actions.fetchSource(res.data.data))
			})
			.catch(err => console.log(err))
			.finally(() => {
				setLoading(false)
			})
	}, [page, rowsPerPage])

	return (
		<Spin spinning={loading}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>№</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Тип</TableCell>
							<TableCell>Действия</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{srcs.map(row => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.id}
								</TableCell>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.type}</TableCell>
								<TableCell>
									<Actions />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Spin>
	)
}

export default Source
