import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    padding-left: 35px;

    @media (max-width: 550px) {
        padding: 0 10px 0 10px;
        margin-top: 100px;
    }
`;

export const HeaderActivitys = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: 5px;

    h3 {
        font-size: 2.3em;
        font-weight: 600;
        margin-bottom: 0;
        margin-right: 15px;
    }
    
    p {
        margin-bottom: 5px;
        margin-left: 10px;
        color: #7B90B0;
        font-size: 13px;
    }

    img {
        margin-bottom: 10px;
    }
`;

export const BodyActivitys = styled.div`
    margin-top: 15px;
    width: 98%;
    min-height: 80vh;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4.08485px 23.4879px rgba(159, 147, 192, 0.15);

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const BoxMenu = styled.div`
    display: flex;
    border-bottom: 1.6px solid #E8EEF3;
    overflow-x: auto;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-left: 40px;
    overflow-x: auto;

    @media (max-width: 650px) {
        width: 600px;
    }

    /* Estilizar a barra de rolagem */
    ::-webkit-scrollbar {
        width: 12px; /* Largura da barra de rolagem */
        height: 5px;
    }

    /* Estilizar o track (a trilha da barra de rolagem) */
    ::-webkit-scrollbar-track {
        background-color: #f1f1f1; /* Cor de fundo do track */
    }

    /* Estilizar o thumb (a própria barra de rolagem) */
    ::-webkit-scrollbar-thumb {
        height: 5px;
        background-color: #6D49F2;/* Cor da barra de rolagem */
        border-radius: 6px; /* Borda arredondada */
    }

    /* Estilizar o thumb quando passar o mouse sobre ele */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #555; /* Cor da barra de rolagem quando hover */
    }

    :hover {
        cursor: pointer;
    }
`

export const MenuOptions = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-right: 40px;
    color: #7B90B0;
    height: 100%;
    white-space: nowrap;

    &.select {
        color: #000;
        font-weight: 600;
        border-bottom: 2px solid #6D49F2;
    }

    :hover {
        cursor: pointer;
    }

    @media (max-width: 550px) {
        font-size: 14px;
    }
`;

export const BoxActivitys = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    min-height: 510px;

    &.margin-bot {
        margin-bottom: 150px;
    }
`;

export const BoxGraphic = styled.div`
    width: 80%;
    height: 300px;
    margin-bottom: 100px;
`;

export const CardActivitys = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 150px;
    border: 1.2px solid rgba(123, 144, 176, 0.13);
    box-shadow: 0px 3.60199px 18.9104px rgba(166, 181, 235, 0.1);
    border-radius: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        width: 90%;
    }   
`;

export const CardDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 70%;
    background-color: #A6B5EB1A;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;

    @media (max-width: 768px) {
        display: none;
    }  
`;

export const Date = styled.div`
    font-size: 16px;
    color: #7B90B0;
    margin-bottom: 5px;
    font-weight: 600;

    div {
        color: #000;
    }

    &.weight {
        font-weight: 600;
    }

    &.marginMobile {
        margin-right: 50px;
    }
`;

export const CardButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 15px;
        padding: 10px 0 10px 0;
    }
`;

export const Button = styled.button`
    position: relative;
    width: 150px;
    height: 45px;
    border: 0;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor};
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
    border: 0;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 50%;
        margin-bottom: 15px;
        height: 45px;
        padding: 10px 0 10px 0;
    } 

    @media (max-width: 550px) {
        width: 90%;
    }
`;

export const CardCode = styled.div`
    width: 95%;
    min-height: 150px;
    height: auto;
    border: 1.2px solid rgba(123, 144, 176, 0.13);
    box-shadow: 0px 3.60199px 18.9104px rgba(166, 181, 235, 0.1);
    border-radius: 10px;
    margin-bottom: 15px;
    margin-bottom: 15px;
    padding-left: 20px;
    padding-top: 20px;
    display: none;

    &.show {
        display: block;
    }
`;

export const BoxLanguage = styled.div`
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const BoxCode = styled.div`
    height: auto;
    width: 100%;
    padding: 0 10px 10px 10px;

    div {
        margin-bottom: 10px;
    }
`
export const Form = styled.form`
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Label = styled.label`
    font-size: 16px;
    color: #7B90B0;
    font-weight: 600;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: auto;
    min-height: 600px;
    border: 1.2px solid rgba(123, 144, 176, 0.13);
    box-shadow: 0px 3.60199px 18.9104px rgba(166, 181, 235, 0.1);
    border-radius: 10px;
    padding: 25px;
    resize: none;

    :focus {
        outline: none;
    }
`;

export const ButtonInput = styled.input`
    width: 150px;
    height: 45px;
    border: 0;
    border-radius: 8px;
    background-color: #007bff;
    font-size: 12px;
    color: #fff;
    margin-bottom: 10px;
    border: 0;

    :hover {
        cursor: pointer;
    }
`;

export const MessageModal = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #7B90B0;
    text-align: center;
`;

export const BoxButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: auto;
    height: 60%;
    align-items: flex-end;
    justify-content: space-around;
`;
