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
	console.log(store.favoritos);
	
  },[])

  const getDatos = async (seleccion) => {
    const result = await getListCharacter(seleccion);
	
	console.log(result);
	
	const formatData=result.map(item => ({...item.properties, description:item.description, id:item._id}));
	console.log(formatData);
	
	
	dispatch({type:"setData", payload:{key:seleccion,data:formatData}})
	console.log(store.people);
	
  }

  const datosEnviados =(id, name)=>{
	console.log(id,name);
	dispatch({type:"selectFavorite", payload:{id,name}})
  }

	return (
		// <div className="text-center mt-5">
		// 	<h1>Hello Rigo!!</h1>
		// 	<Carrusel/>
		// </div>
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