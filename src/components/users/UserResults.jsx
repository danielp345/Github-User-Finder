import { useEffect, useContext } from "react"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"
import GithubContext from "../../context/github/GithubContext"

function UserResults() {
	const { users, loading, fetchUsers } = useContext(GithubContext)

	useEffect(() => {
		fetchUsers()
	}, [])

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{users.map((user) => (
					<UserItem key={users.id} user={user} />
				))}
			</div>
		)
	} else {
		return <Spinner />
	}
}

export default UserResults