
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details = () => {
    const {store, dispatch} =useGlobalReducer()
    const obj= JSON.parse(localStorage.getItem('seleccion'));
    return(
        <div className="container-fluid" style={{paddingLeft:"40px", paddingRight:"40px"}}>
            <div className="row justify-content-center">
                <div className="col-lg-12 d-flex">
                    <div className="col-lg-6 mt-5">
                        <img src={rigoImageUrl}/>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <h1>{obj.name}</h1>
                           {obj.description}
                    </div>
                </div>
            </div>

            <hr
            className="my-4"
            style={{ borderColor: "red" }}
            />

            <div className="col-lg-12 d-flex">
                <div className="col-lg-2 d-flex flex-column">
                    <label className="encabezado">Name</label>
                    <label className="item">{obj.name}</label>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    {/* <label>Birth Year</label>
                    <label>{obj.birth_year}</label> */}

                    {obj.description.includes('person')?
                    <><label className="encabezado">Birth Year</label>
                    <label className="item">{obj.birth_year}</label></>
                    :(obj.description.includes('planet')?<><label className="encabezado">Population</label>
                    <label className="item">{obj.population}</label></>:<><label className="encabezado">Manufacturer</label>
                    <label className="item">{obj.manufacturer}</label></>)
                    }
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    {/* <label>Gender</label>
                    <label>{obj.gender}</label> */}
                    {obj.description.includes('person')?
                    <><label className="encabezado">Gender</label>
                    <label className="item">{obj.gender}</label></>:
                    (obj.description.includes('planet')?
                    <><label className="encabezado">Climate</label>
                    <label className="item">{obj.climate}</label></>:
                    <><label className="encabezado">Model</label>
                    <label className="item">{obj.model}</label></>)
                    }
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    {/* <label>Height</label>
                    <label>{obj.height}</label> */}
                    {obj.description.includes('person')?
                    <><label className="encabezado">Height</label>
                    <label className="item">{obj.height}</label></>:
                    (obj.description.includes('planet')?
                    <><label className="encabezado">Gravity</label>
                    <label className="item">{obj.gravity}</label></>:
                    <><label className="encabezado">Passengers</label>
                    <label className="item">{obj.passengers}</label></>)
                    }
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    {/* <label>Skin Color</label>
                    <label>{obj.skin_color}</label> */}
                    {obj.description.includes('person')?
                    <><label className="encabezado">Skin Color</label>
                    <label className="item">{obj.skin_color}</label></>:
                    (obj.description.includes('planet')?
                    <><label className="encabezado">Diameter</label>
                    <label className="item">{obj.diameter}</label></>:
                    null)
                    }
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    {/* <label>Eye Color</label>
                    <label>{obj.eye_color}</label> */}
                    {obj.description.includes('person')?
                    <><label className="encabezado">Eye Color</label>
                    <label className="item">{obj.eye_color}</label></>:
                    (obj.description.includes('planet')?
                    <><label className="encabezado">Terrain</label>
                    <label className="item">{obj.terrain}</label></>:
                    null)
                    }
                </div>
                
            </div>


        </div>
    );
};