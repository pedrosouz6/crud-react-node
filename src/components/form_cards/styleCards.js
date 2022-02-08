import style from "styled-components";

import { Style } from "../StylesDefault/style";

const { 
    border_radius,
    background_second
} = Style;

export const CardsStyle = style.article `
    .cards {
        background: red;
        width: 400px;
        background-color: ${background_second};
        padding: 10px 20px; 
        margin-top 1rem;
        border-radius: ${border_radius};
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;   
    }

    .cards p {
        margin-bottom: 8px;
    }

    .card__actions p {
        cursor: pointer;
        display: block;
        padding: 2px 2px 0 2px;
        font-size: 13pt;
    }

    .card__actions p:last-child{
        margin-bottom: 0;
    }

    .load {
        font-size: 20pt;
        color: white;
        margin-top: 1rem;
        animation: rotation 2s infinite linear;
        font-weight: 500;
    }
    
    @keyframes rotation {
    from {
        transform: rotate(0deg);
        }
    to {
        transform: rotate(360deg);
    }
`   