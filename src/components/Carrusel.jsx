import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";




export const Carrusel = ({data,actionFavorito, favoritos}) => {
    console.log(favoritos);
    const navigate = useNavigate();


    const viewLike = (id) =>{
       return favoritos?.some(fav => fav.id === id);
    }
    

    const verDetalle = async(item) => {
        console.log('ingresooo  a ver detalles');
        console.log(item);
        localStorage.setItem('seleccion',JSON.stringify(item))
        navigate(`/details/${item.uid}`)
    }





    return (
    // <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    //     <div className="carousel-inner">
    //         <div className="carousel-item active">
    //         <div className="d-flex justify-content-center gap-3">
              
    //                     <div className="card" style={{width:"18rem"}}>
    //                         <img src={rigoImageUrl} className="card-img-top" alt="..."/>
    //                         <div className="card-body">
    //                             <h5 className="card-title">Card title</h5>
    //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    //                             <a href="#" className="btn btn-primary">Go somewhere</a>
    //                         </div>
    //                     </div>
                    
    //                     <div className="card" style={{width:"18rem"}}>
    //                         <img src={rigoImageUrl} className="card-img-top" alt="..."/>
    //                         <div className="card-body">
    //                             <h5 className="card-title">Card title</h5>
    //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    //                             <a href="#" className="btn btn-primary">Go somewhere</a>
    //                         </div>
    //                     </div>
                   
    //                     <div className="card" style={{width:"18rem"}}>
    //                         <img src={rigoImageUrl} className="card-img-top" alt="..."/>
    //                         <div className="card-body">
    //                             <h5 className="card-title">Card title</h5>
    //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    //                             <a href="#" className="btn btn-primary">Go somewhere</a>
    //                         </div>
    //                     </div>
                    
    //                     <div className="card" style={{width:"18rem"}}>
    //                         <img src={rigoImageUrl} className="card-img-top" alt="..."/>
    //                         <div className="card-body">
    //                             <h5 className="card-title">Card title</h5>
    //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    //                             <a href="#" className="btn btn-primary">Go somewhere</a>
    //                         </div>
    //                     </div>
                 
    //         </div>
    //         </div>
    //     </div>
    //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //         <span className="visually-hidden">Next</span>
    //     </button>
    // </div>
    


        <div className="carousel-scroll">
            {data.map((item, index) => (
                <div className="card" style={{ width: "18rem" }} key={index}>
                {/* <img
                    src={`https://starwars-visualguide.com/assets/img/${
                    item.url.includes("people") ? "characters" :
                    item.url.includes("planets") ? "planets" :
                    "vehicles"
                    }/${item.url.match(/\/([0-9]*)\/$/)[1]}.jpg`}
                    className="card-img-top"
                    alt={item.name}
                /> */}
                <img src={rigoImageUrl} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div>{item.gender? <p className="datos-import">Gender: {item.gender}</p>:(item.population?<p className="datos-import">Population: {item.population}</p>:<p className="datos-import">Model: {item.model}</p>)}
                        {item.hair_color? <p className="datos-import">Hair-color: {item.hair_color}</p>:(item.terrain?<p className="datos-import">Terrain: {item.terrain}</p>:<p className="datos-import">Passengers: {item.passengers}</p>)}
                        {item.eye_color? <p className="datos-import">Eye-color: {item.eye_color}</p>:null}
                        
                    </div>
                    <div className="footer-card">
                        {/* <a href="#" className="btn btn-primary mt-4">Leran more!</a> */}

                        <button type="button" className="btn btn-outline-primary mt-4" onClick={()=>verDetalle(item)}>Leran more!</button>

                        {/* <i className="fa-regular fa-heart mt-4"></i> */}

                        {/* <i className="fa-solid fa-heart mt-4 corazon-blanco" title="dislike" ></i>
                        <i className="fa-solid fa-heart mt-4 corazon-rojo" title="like" ></i> */}



                        {/* <i className="fa-heart fa-solid text-danger mt-4"></i>
                        <i className="fa-heart fa-regular mt-4"></i> */}
                        
                        <i className={viewLike(item.id)?'fa-heart fa-solid text-danger mt-4':'fa-heart fa-regular mt-4'} title={viewLike(item.id)?"like":"dislike"} 
                        onClick={()=>actionFavorito(item.id,item.name)}></i>
                        
                        {/* <i className={state?'fa-heart fa-solid text-danger mt-4':'fa-heart fa-regular mt-4'} title={state?"like":"dislike"} onClick={actionFavorito}></i> */}

                    </div>
                </div>
                </div>
            ))}
        </div>

        // <><h1>hola</h1></>

    );
};