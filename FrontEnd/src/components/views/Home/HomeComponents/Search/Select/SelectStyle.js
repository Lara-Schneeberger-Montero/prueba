import styled from "styled-components";

const StyledSelect = styled.div`
    width: 30%;

    a{
        text-decoration: none;
    }

    .selectBox{
        margin: auto;
        position: relative;
    }

    .select{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: .2s ease all;
        background-color: #fff;
        border-radius: 5px;
        padding: 0 0.5rem;
        cursor: pointer;
        border: 2px solid transparent;
    }

    .select.active,
    .select:hover {
        border: 2px solid var(--db-naranja);
    }

    .select i{
        font-size: 30px;
        margin-left: 0.5rem;
        color: var(--db-naranja);
    }

    .titulo{
        color: var(--db-negro);
        font-weight: 700;
    }

    .opciones{
        position: absolute;
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.5);
        border-radius: 5px;
        max-height: 200px;
        overflow: auto;
        display: none;
    }

    .opciones.active {
        display: block;
        animation: fadeIn .3s forwards;
    }

    .contenido-opcion{
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 2px solid #e6e6e6;
        transition: .2s ease all; 
        padding: 0.5rem 1rem;
    }

    .contenido-opcion:hover{
        background-color: #f5f5f5;
    }

    .contenido-opcion i{
        font-size: 24px;
        margin-right: 1rem;
        color: var(--db-naranja);
    }

    .ciudad{
        color: var(--db-negro);
        font-size: 18px;
        font-weight: 700;
    }

    .pais{
        color: var(--db-negro);
        font-size: 15px;
        font-weight: 700;
    }


    @media (max-width: 480px) {
        width: 100%;
    }
`;

export { StyledSelect };
