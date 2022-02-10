import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function Navbar({ title }) {
	return (
		<nav className="navbar mb-12 bg-neutral text-neutral-content shadow-lg">
			<div className="container mx-auto">
				<div className="mx-2 flex-none px-2">
					<FaGithub className="inline pr-2 text-3xl" />
					<Link to="/" className="text-lg font-bold">
						{title}
					</Link>
				</div>

				<div className="mx-2 flex-1 px-2">
					<div className="flex justify-end">
						<Link to="/" className="btn-s btn btn-ghost rounded-btn">
							Home
						</Link>
						<Link to="/about" className="btn-s btn btn-ghost rounded-btn">
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

Navbar.defaultProps = {
	title: "Github Finder",
}

Navbar.propTypes = {
	title: PropTypes.string,
}

export default Navbar
