import { Spin } from 'antd/lib'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from '../../hooks/useDebounce'
import axiosBasic from '../../services/axios/axiosBasic'
import { ordersModel } from '../../store/ordersModel'
import Filter from '../Orders/Filter/Filter'
import MainTable from './Table/MainTable'

const Orders = () => {
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()
	const [page, setPage] = useState(0)
	const [countUsers, setCountUsers] = useState(0)
	const [courseId, setCourseId] = useState(0)
	const [leadId, setLeadId] = useState('')
	const debouncedCourseId = useDebounce(courseId, 500)
	const debouncedLeadId = useDebounce(leadId, 500)
	const [dateFrom, setDateFrom] = useState('')
	const [dateTo, setDateTo] = useState('')

	// table
	useEffect(() => {
		setLoading(true)
		axiosBasic
			.get(
				`/orders?page=${page}&course_id=${debouncedCourseId}&lead_id=${debouncedLeadId}&from=${dateFrom}&to=${dateTo}`,
				{
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					},
				}
			)
			.then(res => {
				dispatch(ordersModel.actions.fetchOrders(res.data.data))
				setCountUsers(res.data.total)
			})
			.catch(err => console.log(err))
			.finally(() => {
				setLoading(false)
			})
	}, [page, debouncedCourseId, debouncedLeadId, dateFrom, dateTo])

	return (
		<Spin spinning={loading}>
			<Filter
				courseId={courseId}
				setCourseId={setCourseId}
				leadId={leadId}
				setLeadId={setLeadId}
				setDateFrom={setDateFrom}
				setDateTo={setDateTo}
			/>
			<MainTable page={page} setPage={setPage} countUsers={countUsers} />
		</Spin>
	)
}

export default Orders
