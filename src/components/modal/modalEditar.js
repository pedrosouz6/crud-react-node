import { Modal } from "./modalStyle";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import Axios from "axios";

import { ContextCar } from "../context/car";

export default function Editar(){

    const { call, setCall } = useContext(ContextCar);

    const { id, brand, model } = useParams();
    const navigate = useNavigate();

    const [ newBrand, setNewBrand ] = useState(brand);
    const [ newModel, setNewModel ] = useState(model);
    
    const updateCar = (e) => {
        e.preventDefault();

        Axios.put(`http://localhost:8080/update/${id}`, {
            newBrand: newBrand,
            newModel: newModel
        })

        setCall(!call);
        navigate("/");
    } 

    return(
        
        <Modal onSubmit={updateCar}>
            <h2>Edit car</h2>
            <input type="text" 
            placeholder="Brand" 
            defaultValue={newBrand} 
            onChange={(e) => setNewBrand(e.target.value)}
            autoFocus/>

            <input type="text" 
            placeholder="Model" 
            onChange={(e) => setNewModel(e.target.value)}
            defaultValue={newModel}  />

            <div className="form__submit">
                <input type="submit"  value="Edit" />
            </div>
            <a href="/"> <BsArrowLeftShort/> Go back</a>
        </Modal>
        
    )
}