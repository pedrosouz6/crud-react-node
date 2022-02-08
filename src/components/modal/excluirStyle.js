import style from "styled-components";

import { Style } from "../StylesDefault/style";

const { 
    border_radius,
    background_second,
    background_purple
} = Style;

export const Modal = style.article `
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .2);
    z-index: 10;
    
    .modal__excluir {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${background_second};
        padding: 0px 15px;
        border-radius: ${border_radius};
        opacity: 0;
        transition: .2s ease-in-out;
    }

    .modal__excluir.true {
        opacity: 1;
    }

    .modal__message h2{
        color: white;
        margin: 1rem 0; 
    }

    .modal__message p {
        color: white;
        font-size: 12pt;    
    }

    .modal__confirm {
        width: 100%;
        display: flex;
        justify-content: end;
        margin: 1.5rem 0 1rem 0;
    }

    .modal__confirm button {
        padding: 5px 15px;
        margin-left: 1rem;
        cursor: pointer;
        border-radius: ${border_radius};
        font-weight: 500;
        letter-spacing: .5px;
    }

    .modal__confirm .modal__confirm__second {
        border: 2px solid ${background_purple};
        color: ${background_purple};
        background: none;
    }

    .modal__confirm .modal__confirm__primary {
        background-color: ${background_purple};
        color: white;
    }

    .modal__close button {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        color: white;
        background-color: ${background_second};
        box-shadow: -1px 1px 1px 1px rgba(255, 255, 255, .1);
        font-weight: 500;
        cursor: pointer;
    }

    button {
        transition: .2s ease-in-out;
    }

    button:hover{
        opacity: .8;
    }
`