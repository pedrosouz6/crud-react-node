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
    const [ validate, setValidate ] = useState(true);
 
    //Validando os inputs e implementando a lógica de dar focus()
    const validateInputs = (e) => {
        e.preventDefault();

        if(newBrand === "" || newModel === "") {
            setValidate(false);
    
            if(newBrand.length > 0) {
                document.getElementById("editModel").focus();
            } else {
                document.getElementById("editBrand").focus();
            }
        } else {
            updateCar();
        }
    }
    
    //Requisição para a api
    const updateCar = () => {
        Axios.put(`http://localhost:8080/update/${id}`, {
            newBrand: newBrand,
            newModel: newModel
        })

        setCall(!call);
        navigate("/");
    } 

    return(
        
        <Modal onSubmit={validateInputs}>
            <h2>Edit car</h2>
            <input type="text" 
            placeholder="Brand" 
            id="editBrand"
            defaultValue={newBrand} 
            onChange={(e) => setNewBrand(e.target.value)}
            autoFocus/>

            <input type="text" 
            placeholder="Model" 
            id="editModel"
            onChange={(e) => setNewModel(e.target.value)}
            defaultValue={newModel}  />

            {/* Mensagem de erro */}
            {validate ? "" : <p>Preencha o(s) campo(s)</p>}

            <div className="form__submit">
                <input type="submit"  value="Edit" />
            </div>
            <a href="/"> <BsArrowLeftShort/> Go back</a>
        </Modal>
        
    )
}