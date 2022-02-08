import { useContext } from "react";
import { ContextCar } from "../context/car";

import { FormStyle } from "./styleForm";
import Cards from "../form_cards/cards";

import Axios from "axios";

export default function Form(){

    const { brand, setBrand, model, setModel, setCall, call } = useContext(ContextCar);
    
    const valuesInputs = (e) => {
        e.preventDefault();
        setBrand('');
        setModel('');
        AddCar();
    }

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
                <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} autoFocus/>
                <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} />

                <div className="form__submit">
                    <input type="submit"  value="To add" />
                </div>
            </FormStyle>
            <Cards/>
        </>
    )
}