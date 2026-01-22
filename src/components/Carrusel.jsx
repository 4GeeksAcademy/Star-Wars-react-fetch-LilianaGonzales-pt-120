import rigoImageUrl from "../assets/img/rigo-baby.jpg"
export const Carrusel = ({data}) => {
    console.log(data);
    
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
                    <div>
                        <p className="datos-import">Gender: {item.gender}</p>
                        <p className="datos-import">Hair-color: {item.hair_color}</p>
                        <p className="datos-import">Eye-color: {item.eye_color}</p>
                    </div>
                    <div>
                        <a href="#" className="btn btn-primary mt-4">Go somewhere</a>
                    </div>
                </div>
                </div>
            ))}
        </div>

        // <><h1>hola</h1></>

    );
};