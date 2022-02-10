import { useContext, useState } from "react";
import { ContextCar } from "../context/car";

import { FormStyle } from "./styleForm";
import Cards from "../form_cards/cards";

import Axios from "axios";

export default function Form(){

    const { brand, setBrand, model, setModel, setCall, call } = useContext(ContextCar);

    const [ validate, setValidate ] = useState(true);
    
    //Validando os inputs e implementando a lógica de dar focus()
    const valuesInputs = (e) => {
        e.preventDefault();
        
        if(brand === "" || model === "") {
            setValidate(false);

            if(brand.length > 0) {
                document.getElementById("modelInput").focus();
            } else {
                document.getElementById("brandInput").focus();
            }

        } else {
            AddCar();
            setValidate(true);
            document.getElementById("brandInput").focus();

            //Limpando os inputs
            setBrand('');
            setModel('');
        }
    }
    
    //Requisição para a api
    const AddCar = () => {
        Axios.post("http://localhost:8080/add", {
            brand: brand,
            model: model
        });
        setCall(!call);
    }

    return(
        <>
            <FormStyle onSubmit={valuesInputs}>
                <h2>Cars</h2>

                <input type="text" 
                placeholder="Brand" 
                id="brandInput"
                value={brand} 
                onChange={(e) => setBrand(e.target.value)} 
                autoFocus />

                <input type="text" 
                placeholder="Model" 
                id="modelInput"
                value={model} 
                onChange={(e) => setModel(e.target.value)} />

                {/* Mensagem de erro */}
                {validate ? "" : <p>Preencha o(s) campo(s)</p>}

                <div className="form__submit">
                    <input type="submit"  value="To add" />
                </div>
            </FormStyle>
            <Cards/>
        </>
    )
}