import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"

function UserSearch() {
	const [text, setText] = useState("")

	const { users, searchUsers, clearResults } = useContext(GithubContext)
	const { setAlert } = useContext(AlertContext)

	const handleChange = (e) => setText(e.target.value)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (text === "") {
			setAlert("Please enter something", "error")
		} else {
			searchUsers(text)
			setText("")
		}
	}

	return (
		<div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
			<div>
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<div className="relative">
							<input
								type="text"
								className="input input-lg w-full bg-gray-200 pr-40 text-black"
								placeholder="Search"
								value={text}
								onChange={handleChange}
							/>
							<button
								type="submit"
								className="btn btn-lg absolute top-0 right-0 w-36 rounded-l-none"
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button onClick={clearResults} className="btn btn-ghost btn-lg">
						Clear
					</button>
				</div>
			)}
		</div>
	)
}

export default UserSearch
