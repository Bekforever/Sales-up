import Home from '../screens/Home/Home'
import Courses from '../screens/Courses/Courses'
import Instruments from '../screens/Instruments/Instruments'
import Leads from '../screens/Leads/Leads'
import Orders from '../screens/Orders/Orders'
import Settings from '../screens/Settings/Settings'
import Sources from '../screens/Sources/Sources'

export const RoutesData = [
	{ path: '/', element: Home },
	{ path: '/courses', element: Courses },
	{ path: '/instruments', element: Instruments },
	{ path: '/leads', element: Leads },
	{ path: '/orders', element: Orders },
	{ path: '/settings', element: Settings },
	{ path: '/sources', element: Sources },
]
