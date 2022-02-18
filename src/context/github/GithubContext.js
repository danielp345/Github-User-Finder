import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHUB_URL = "https://api.github.com"
const GITHUB_TOKEN = "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"

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		loading: false,
	}

	const [state, dispatch] = useReducer(githubReducer, initialState)

	// Get search results
	const searchUsers = async (text) => {
		setLoading()

		const params = new URLSearchParams({
			q: text,
		})

		const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		})

		const { items } = await response.json()
		dispatch({
			type: "GET_USERS",
			payload: items,
		})
	}

	//Set loading
	const setLoading = () => dispatch({ type: "SET_LOADING" })

	//Clear results
	const clearResults = () => dispatch({ type: "CLEAR_RESULTS" })

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				searchUsers,
				clearResults,
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
