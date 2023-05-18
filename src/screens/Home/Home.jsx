import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/reducers/users/users.actions'

const Home = () => {
	const dispatch = useDispatch()
	const { loading, users } = useSelector(store => store.users)

	useEffect(() => {
		dispatch(fetchUsers({ id: 1 }))
		console.log(loading)
		console.log(users)
	}, [])

	return (
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, aut
			temporibus officiis veniam eaque asperiores quibusdam iure modi optio.
			Aliquid.
		</div>
	)
}

export default Home
