import { Button, Input, Space } from 'antd'
import React from 'react'
import './Settings.scss'
const Settings = () => {
	return (
		<div className='flex items-start justify-around gap-5 p-5'>
			<div className='flex-1 flex flex-col bg-white rounded-md shadow-md min-h-[200px] p-5'>
				<h2 className='text-2xl'>Статус</h2>
				<form className='flex flex-col gap-y-5'>
					<Space.Compact style={{ width: '100%' }}>
						<Input placeholder='Статус' className='py-2 text-lg' />
						<Button type='primary' className='bg-[#1976D2] py-2 text-lg h-fit'>
							Submit
						</Button>
					</Space.Compact>
					<ul className='flex flex-col gap-y-3'>
						<li className='flex items-center justify-between border-[1px] border-[#adadad] py-3 px-2 rounded-md text-lg'>
							<span>started</span>
							<div className='flex items-center text-2xl gap-x-5 text-[#797575]'>
								<button>
									<i className='bx bx-pencil'></i>
								</button>
								<button>
									<i className='bx bx-trash'></i>
								</button>
							</div>
						</li>
						<li className='flex items-center justify-between border-[1px] border-[#adadad] py-3 px-2 rounded-md text-lg'>
							<span>started</span>
							<div className='flex items-center text-2xl gap-x-5 text-[#797575]'>
								<button>
									<i className='bx bx-pencil'></i>
								</button>
								<button>
									<i className='bx bx-trash'></i>
								</button>
							</div>
						</li>
						<li className='flex items-center justify-between border-[1px] border-[#adadad] py-3 px-2 rounded-md text-lg'>
							<span>started</span>
							<div className='flex items-center text-2xl gap-x-5 text-[#797575]'>
								<button>
									<i className='bx bx-pencil'></i>
								</button>
								<button>
									<i className='bx bx-trash'></i>
								</button>
							</div>
						</li>
					</ul>
				</form>
			</div>
			<div className='flex-1 flex flex-col bg-white rounded-md shadow-md min-h-[200px] p-5'>
				<h2 className='border-b-[1px] border-[#adadad] text-2xl'>Бот</h2>
				<table className='flex flex-col gap-y-5 py-3'>
					<tr className='flex text-left'>
						<th className='flex-1'>BOT</th>
						<th className='flex-1'>https://t.me/first_school_nukus_bot</th>
					</tr>
					<tr className='flex text-left'>
						<th className='flex-1'>ID</th>
						<th className='flex-1'>1</th>
					</tr>
					<tr className='flex text-left'>
						<th className='flex-1'>Contact</th>
						<th className='flex-1'>https://t.me/first_school_nukus_bot</th>
					</tr>
					<tr className='flex text-left'>
						<th className='flex-1'>Created</th>
						<th className='flex-1'>23-05-2023 11:05</th>
					</tr>
					<tr className='text-left'>
						<button className='text-red-500 font-semibold'>DELETE</button>
					</tr>
				</table>
			</div>
			<div className='flex-1 flex flex-col bg-white rounded-md shadow-md min-h-[200px] p-5'>
				<h2 className='text-2xl border-[#adadad] border-b-[1px] mb-5'>Create Bot</h2>
				<form className='flex flex-col gap-y-5'>
					<input type='text' className='border-[#adadad] outline-0 border-[1px] py-2 px-4 rounded-md text-lg' placeholder='Username...' />
					<input type='text' className='border-[#adadad] outline-0 border-[1px] py-2 px-4 rounded-md text-lg' placeholder='Token...' />
					<input type='text' className='border-[#adadad] outline-0 border-[1px] py-2 px-4 rounded-md text-lg' placeholder='Contact...' />
					<Button type='primary' className='bg-[#1976D2]'>asdasd</Button>
				</form>
			</div>
		</div>
	)
}

export default Settings
