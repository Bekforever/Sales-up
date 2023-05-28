import { Button } from '@mui/material'
import { Popover } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { courseModel } from '../../../store/courseModel'
import axiosBasic from '../../../services/axios/axiosBasic'

const ActionsTable = ({ course }) => {
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	const [newDataCourse, setNewDataСourse] = useState({
		title: '',
		description: '',
		price: '',
	})
	const handleOpenChange = newOpen => {
		setOpen(newOpen)
	}

	const removeCource = () => {
		dispatch(courseModel.actions.removeCource(course.id))
		axiosBasic
			.delete(`/courses/${course.id}`, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(res => console.log(res))
	}

	const onSubmit = () => {
		const obj = { id: course.id, ...newDataCourse }
		// axios
		// 	.put(`${baseURL}/sources`, obj, {
		// 		headers: {
		// 			Authorization: 'Bearer ' + localStorage.getItem('token'),
		// 		},
		// 	})
		// 	.then(res => console.log(res))
		dispatch(
			courseModel.actions.editCource({
				...course,
				title: newDataCourse.title,
				price: newDataCourse.price,
				description: newDataCourse.description,
			})
		)
	}

	const content = () => (
		<div className='w-[200px] flex flex-col gap-y-5'>
			<input
				className='w-full border-[1px] border-black py-2 px-4 rounded-md'
				placeholder='Название...'
				value={newDataCourse.title}
				onChange={e =>
					setNewDataСourse({ ...newDataCourse, title: e.target.value })
				}
				type='text'
			/>
			<input
				className='w-full border-[1px] border-black py-2 px-4 rounded-md'
				placeholder='Цена...'
				value={newDataCourse.price}
				onChange={e =>
					setNewDataСourse({ ...newDataCourse, price: e.target.value })
				}
				type='text'
			/>
			<input
				className='w-full border-[1px] border-black py-2 px-4 rounded-md'
				placeholder='Описание...'
				value={newDataCourse.description}
				onChange={e =>
					setNewDataСourse({ ...newDataCourse, description: e.target.value })
				}
				type='text'
			/>
			<Button onClick={onSubmit} variant='contained'>
				Добавить
			</Button>
		</div>
	)

	return (
		<>
			<div className='flex items-center gap-x-3'>
				<Popover
					content={content}
					trigger='click'
					open={open}
					onOpenChange={handleOpenChange}
				>
					<button>
						<i className='bx bx-pencil text-2xl text-[#797575]'></i>
					</button>
				</Popover>
				<button onClick={removeCource}>
					<i className='bx bx-trash text-2xl text-[#797575]'></i>
				</button>
			</div>
		</>
	)
}

export default ActionsTable
