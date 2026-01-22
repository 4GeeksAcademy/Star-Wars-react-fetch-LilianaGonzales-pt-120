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
  },[])

  const getDatos = async (seleccion) => {
    const result = await getListCharacter(seleccion);
	
	console.log(result);
	
	const formatData=result.map(item => ({...item.properties, description:item.description}));
	console.log(formatData);
	
	
	dispatch({type:"setData", payload:{key:seleccion,data:formatData}})
	console.log(store.people);
	
  }

	return (
		// <div className="text-center mt-5">
		// 	<h1>Hello Rigo!!</h1>
		// 	<Carrusel/>
		// </div>
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-lg-6 mt-5">
					<div><h1 className="title-selection">Characters</h1><Carrusel data={store.people || []}/></div>
					
					<div className="mt-5"><h1 className="title-selection">Planets</h1><Carrusel data={store.planets || []}/></div>
					
					<div className="mt-5"><h1 className="title-selection">Vehicles</h1><Carrusel data={store.vehicles || []}/></div>
					 
				</div>
			</div>
		</div>
	);
}; 