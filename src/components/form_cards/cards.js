import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

//Icons
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";

//Files
import { CardsStyle } from "./styleCards";
import Delete from "../modal/modalExcluir";
import { ContextCar } from "../context/car";

export default function Cards(){

    const navigate = useNavigate();
    const { data, load } = useContext(ContextCar);
    const [close, setClose] = useState(false);
    const [id, setId] = useState(null);

    //Paginação 
    const [itemsPage, setItemsPage] = useState(5);
    const [pageCurrent, setPageCurrent] = useState(4);

    const totalPage = Math.ceil(data.length / itemsPage);
    const start = itemsPage * pageCurrent;
    const pageLast = start + itemsPage;
    const itemsCurrent = data.slice(start, pageLast)

    console.log(`${itemsCurrent}`)



    //Clicar no butão deletar
    const excluir = (id) => {
        setClose(true);
        setId(id);
    }

    return(
        <>
            <CardsStyle>
                {!load ? data.map(item => (
                    <div key={item.id} className="cards">
                    <div className="card__item">
                        <p><strong>Brand: </strong> {item.brand}</p>
                        <p><strong>Model: </strong> {item.model}</p>
                    </div>
                    <div className="card__actions">
                        <p onClick={() => navigate(`/editar/${item.id}/${item.brand}/${item.model}`)} ><FiEdit/></p>
                        <p onClick={() => excluir(item.id)} ><FaTrash/></p>
                    </div>
                </div>
                )) : (
                    <div className="load"><AiOutlineReload/></div>
                )}
            </CardsStyle>

            {close && <Delete setClose={setClose} close={close} id={id} />}
        </>
    )
}