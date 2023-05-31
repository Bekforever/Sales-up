import React from 'react'
import { Button } from 'antd'

const Create = () => {
	return (
		<div className='flex-1 flex flex-col bg-white rounded-md shadow-md min-h-[200px] p-5'>
			<h2 className='text-2xl border-[#adadad] border-b-[1px] mb-5'>
				Create Bot
			</h2>
			<form className='flex flex-col gap-y-5'>
				<input
					type='text'
					className='border-[#adadad] outline-0 border-[1px] py-2 px-4 rounded-md text-lg'
					placeholder='Username...'
				/>
				<input
					type='text'
					className='border-[#adadad] outline-0 border-[1px] py-2 px-4 rounded-md text-lg'
					placeholder='Token...'
				/>
				<input
					type='text'
					className='border-[#adadad] outline-0 border-[1px] py-2 px-4 rounded-md text-lg'
					placeholder='Contact...'
				/>
				<Button type='primary' className='bg-[#1976D2]'>
					Create
				</Button>
			</form>
		</div>
	)
}

export default Create
