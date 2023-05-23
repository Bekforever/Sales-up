import { Spin } from 'antd/lib'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axiosBasic from '../../services/axios/axiosBasic'
import { ordersModel } from '../../store/ordersModel'
import Filter from '../Leads/Filter/Filter'
import './Orders.scss'
import MainTable from './Table/MainTable'

const Orders = () => {
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)
	const [isFiltered, setIsFiltered] = useState(0)

	// table
	useEffect(() => {
		setLoading(true)
		axiosBasic
			.get(`/orders?limit=${rowsPerPage}&page=${page}`, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => {
				dispatch(ordersModel.actions.fetchOrders(res.data.data))
			})
			.catch(err => console.log(err))
			.finally(() => {
				setLoading(false)
			})
	}, [page, rowsPerPage])

	return (
		<Spin spinning={loading}>
			<Filter isFiltered setIsFiltered />
			<MainTable
				page={page}
				setPage={setPage}
				rowsPerPage={rowsPerPage}
				setRowsPerPage={setRowsPerPage}
				isFiltered={isFiltered}
			/>
		</Spin>
	)
}

export default Orders
