import { Link } from "react-router-dom";
// import imageUrl from "../assets/img/logo-star.jpg";
import imageUrl from "../assets/img/logo2-star.png"

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
					<Link to="/">
					{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
					<img style={{width:"10%",height:"10%"}} src={imageUrl} />
				</Link>
				</div>
				
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favoritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};