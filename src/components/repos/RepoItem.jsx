import { FaEye, FaStar, FaInfo, FaLink, FaUtensils } from "react-icons/fa"
import PropTypes from "prop-types"

function RepoItem({ repo }) {
	const {
		name,
		description,
		html_url,
		forks,
		open_issues,
		watchers_count,
		stargazers_count,
	} = repo

	return (
		<div className="card mb-2 rounded-md bg-gray-800 hover:bg-gray-900">
			<div className="card-body">
				<h3 className="mb-2 text-xl font-semibold">
					<a href={html_url}>
						<FaLink className="mr-1 inline" /> {name}
					</a>
				</h3>
				<p className="mb-3">{description}</p>
				<div>
					<div className="badge badge-lg badge-info mr-2">
						<FaEye className="mr-2" /> {watchers_count}
					</div>

					<div className="badge badge-lg badge-success mr-2">
						<FaStar className="mr-2" /> {stargazers_count}
					</div>

					<div className="badge badge-lg badge-error mr-2">
						<FaInfo className="mr-2" /> {open_issues}
					</div>

					<div className="badge badge-lg badge-warning mr-2">
						<FaUtensils className="mr-2" /> {forks}
					</div>
				</div>
			</div>
		</div>
	)
}

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
}

export default RepoItem
