import { Link } from "react-router-dom";
// import imageUrl from "../assets/img/logo-star.jpg";
import imageUrl from "../assets/img/logo2-star.png"
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const {store, dispatch} =useGlobalReducer()


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
					<Link to="/">
					<img style={{width:"10%",height:"10%"}} src={imageUrl} />
				</Link>
				</div>
				
				<div className="dropdown">
					<button 
						className="btn btn-primary dropdown-toggle" 
						type="button" 
						id="dropdownFavoritos" 
						data-bs-toggle="dropdown" 
						aria-expanded="false">
						Favoritos 
						<label className="contador">{store.favoritos.length}</label>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownFavoritos">
						{store.favoritos.length === 0 ? (
						<li className="dropdown-item disabled">No hay favoritos</li>
						) : (
						store.favoritos.map(fav => (
							<li className="dropdown-item d-flex justify-content-between align-items-center" key={fav.id}>
							{fav.name}
							<i 
								className="fa-solid fa-trash-can ms-2" 
								style={{cursor:"pointer"}}
								onClick={(e) =>{
									e.stopPropagation();
									dispatch({type:"selectFavorite", payload:{id:fav.id, name:fav.name}})}}
							></i>
							</li>
						))
						)}
					</ul>
				</div>








			</div>
		</nav>
	);
};