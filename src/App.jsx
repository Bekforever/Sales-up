import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { RoutesData } from './utils/routes.data'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{RoutesData.map((item, index) => (
					<Route key={index} path={item.path} element={<item.element />} />
				))}
			</Route>
		</Routes>
	)
}

export default App
