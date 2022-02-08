import { Modal } from "./excluirStyle";
import Axios from "axios";
import { useContext } from "react";

import { ContextCar } from "../context/car";

export default function Excluir({ setClose, close, id }){

    const { call, setCall } = useContext(ContextCar);

    //Close delete modal
    const closeModal = () => {
        setClose(false);
    }

    const deletar = () => {
        Axios.delete(`http://localhost:8080/delete/${id}`);
        setCall(!call);
        setClose(false);
    }
    

    return(
        <Modal>
            <div className={close ? "modal__excluir true" : "modal__excluir"}>
                <div className="modal__message">
                    <h2>Delete</h2>
                    <p>Are you sure you want to erase this car?</p>
                </div>
                <div className="modal__confirm">
                    <button className="modal__confirm__second" onClick={closeModal} >Cancele</button>
                    <button className="modal__confirm__primary" onClick={deletar} >Delete</button>
                </div>
                <div className="modal__close">
                    <button onClick={closeModal} >X</button>
                </div>
            </div>
        </Modal>
    )
}