import { useParams } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details = () => {
    const {store, dispatch} =useGlobalReducer()
    const params= useParams();
    console.log(params);
    const obj= JSON.parse(localStorage.getItem('seleccion'));
    console.log(obj);
    console.log(obj.name);
    return(
        <div className="container-fluid">
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
                    <label>Name</label>
                    <label>{obj.name}</label>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    <label>Birth Year</label>
                    <label>{obj.birth_year}</label>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    <label>Gender</label>
                    <label>{obj.gender}</label>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    <label>Height</label>
                    <label>{obj.height}</label>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    <label>Skin Color</label>
                    <label>{obj.skin_color}</label>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                    <label>Eye Color</label>
                    <label>{obj.eye_color}</label>
                </div>
                
            </div>


        </div>
    );
};