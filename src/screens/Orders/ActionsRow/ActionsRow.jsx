import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import { Modal } from 'antd/lib'
import React, { useState } from 'react'
import './ActionsRow.scss'
const ActionsRow = () => {
	const [modal2Open, setModal2Open] = useState(false)

	// dropdown
	const items = [
		{
			label: <span>Английский язык</span>,
			key: 'english',
		},
		{
			label: <span>Русский язык</span>,
			key: 'russian',
		},
		{
			label: <span>Математика</span>,
			key: 'maths',
		},
	]

	return (
		<div className='flex items-center gap-2'>
			<button onClick={() => setModal2Open(true)}>
				<i className='bx bx-plus text-2xl'></i>
			</button>
			<button>
				<i className='bx bx-comment text-2xl'></i>
			</button>
			<button>
				<i className='bx bxl-telegram text-2xl'></i>
			</button>
			<Modal
				title='Добавить в курс'
				centered
				open={modal2Open}
				onOk={() => setModal2Open(false)}
				onCancel={() => setModal2Open(false)}
				okButtonProps={{ style: { backgroundColor: '#1976D2' } }}
			>
				<Dropdown
					overlayClassName='dropdown'
					menu={{
						items,
					}}
					trigger={['click']}
				>
					<a onClick={e => e.preventDefault()}>
						<Space>
							Select
							<DownOutlined />
						</Space>
					</a>
				</Dropdown>
			</Modal>
		</div>
	)
}

export default ActionsRow
