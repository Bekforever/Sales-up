import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import Layout from 'antd/es/layout/layout'
import { Menu } from 'antd'
import './Layout.scss'
import { Link } from 'react-router-dom'

// func for aside ANTD start
function getItem(label, key, icon, children) {
	return {
		key,
		children,
		icon,
		label,
	}
}
const items = [
	getItem(<Link to={'/'}>Главная</Link>, '1', <i className='bx bx-home'></i>),
	getItem('Лиды', '2', <i className='bx bxs-contact'></i>),
	getItem('Заказы', '3', <i className='bx bx-cart-add'></i>),
	getItem('Курсы', '4', <i className='bx bx-notepad'></i>),
	getItem('Источники', '5', <i className='bx bx-radio-circle-marked'></i>),
	getItem('Инструменты', '6', <i className='bx bx-wrench'></i>),
	getItem('Настройки', '7', <i className='bx bx-slider'></i>),
	getItem('Logout', '8', <i className='bx bx-log-out'></i>),
]
// func for aside ANTD end

const Layouts = () => {
	const [collapsed, setCollapsed] = useState(false)
	const [langOpen, setLangOpen] = useState(false)
	const [selectedLang, setSelectedLang] = useState(0)
	const langList = ['ru', 'en']
	const langName = langList[selectedLang]

	// onclick language
	const onClickListItem = i => {
		localStorage.setItem('lang', langName)
		setSelectedLang(i)
		setLangOpen(false)
	}

	return (
		<div className='layout__wrapper'>
			<aside className='layout__wrapper__aside'>
				<Layout
					className='layout__wrapper__aside__lay-out'
					style={{ minHeight: '100vh' }}
				>
					<Sider
						className='sider'
						collapsible={null}
						theme='light'
						collapsed={collapsed}
					>
						{collapsed ? null : (
							<div className='layout__wrapper__header__logo absolute w-full'>
								Sales Up
							</div>
						)}
						<Menu
							className='mt-14'
							defaultSelectedKeys={'1'}
							mode='inline'
							items={items}
						/>
					</Sider>
				</Layout>
			</aside>
			<header className='layout__wrapper__header'>
				<div className='flex items-center gap-4'>
					<button
						className='text-2xl text-white'
						onClick={() => setCollapsed(!collapsed)}
					>
						<i class='bx bx-menu'></i>
					</button>
				</div>
				<div className='layout__wrapper__header__lang'>
					<span className='popup-btn' onClick={() => setLangOpen(!langOpen)}>
						{langName}
					</span>
					<svg
						width='10'
						height='6'
						viewBox='0 0 10 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
							fill='#2C2C2C'
						/>
					</svg>
					{langOpen && (
						<div className='lang__popup'>
							<ul>
								<li
									onClick={() => onClickListItem(0)}
									className={selectedLang === 0 ? 'active' : ''}
								>
									ru
								</li>
								<li
									onClick={() => onClickListItem(1)}
									className={selectedLang === 1 ? 'active' : ''}
								>
									en
								</li>
							</ul>
						</div>
					)}
				</div>
			</header>
		</div>
	)
}

export default Layouts
