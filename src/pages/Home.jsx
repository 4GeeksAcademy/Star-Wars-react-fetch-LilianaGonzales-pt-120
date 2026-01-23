import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { getListCharacter } from "../service/swapi.js";
import { Carrusel } from "../components/Carrusel.jsx";

export const Home = () => {

	const {store, dispatch} =useGlobalReducer()

  useEffect(()=>{
	getDatos("people");
	getDatos("planets");
	getDatos("vehicles");
	localStorage.removeItem('seleccion')
  },[])

  const getDatos = async (seleccion) => {
    const result = await getListCharacter(seleccion);
	const formatData=result.map(item => ({...item.properties, description:item.description, id:item._id, uid:item.uid}));
	dispatch({type:"setData", payload:{key:seleccion,data:formatData}})
  }

  const datosEnviados =(id, name)=>{
	dispatch({type:"selectFavorite", payload:{id,name}})
  }

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-lg-8 mt-5">
					<div><h1 className="title-selection">Characters</h1><Carrusel data={store.people || []} actionFavorito={datosEnviados} favoritos={store.favoritos}/></div>
					
					<div className="mt-5"><h1 className="title-selection">Planets</h1><Carrusel data={store.planets || []} actionFavorito={datosEnviados} favoritos={store.favoritos}/></div>
					
					<div className="mt-5"><h1 className="title-selection">Vehicles</h1><Carrusel data={store.vehicles || []} actionFavorito={datosEnviados} favoritos={store.favoritos}/></div>
					 
				</div>
			</div>
		</div>
	);
}; 