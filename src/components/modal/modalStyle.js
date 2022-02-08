import style from "styled-components";

import { Style } from "../StylesDefault/style";

const { 
    background_primary, 
    background_purple, 
    background_second, 
    border_radius 
} = Style

export const Modal = style.form `
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: ${background_second};
    padding: 20px;
    border-radius: ${border_radius};
    
    input {
        width: 100%;
        height: 42px;
        outline: none;
        border: 2px solid ${background_primary};
        border-radius: ${border_radius};
        background-color: ${background_primary};
        margin-bottom: 10px;
        color: white;
        padding: 0 10px;
        transition: .2s ease-in-out;
        letter-spacing: .5px;
        font-size: 11pt;
    }

    input:focus{
        border: 2px solid ${background_purple};
    }

    .form__submit input {
        background: ${background_purple};
        border: 2px solid ${background_purple};
        font-weight: 600;
        text-transform: uppercase;
        transition: .2s ease-in-out;
        cursor: pointer;
        margin-top: 1rem;
    }

    .form__submit input:hover {
        opacity: .8;
    }

    h2 {
        margin-bottom: 1rem;
        color: white;
        font-size: 20pt;
        letter-spacing: .5px;
        font-weight: 500;
    }

    a {
        text-decoration: none;
        margin-top: 10px; 
        display: flex;
        align-items: center;
        gap: 4px;
        color: white;
        padding: 2px 0;
    }

    a:hover {
        text-decoration: underline; 
    }

`
