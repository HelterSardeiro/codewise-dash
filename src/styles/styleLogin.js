import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 35px;
    margin-bottom: 20px;

    @media (max-width: 550px) {
        margin-top: 80px;
        padding-left: 0;
    }
`;

export const bgAuth = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(92,86,181);
    background: linear-gradient(90deg, rgba(92,86,181,1) 20%, rgba(124,206,218,1) 38%, rgba(26,145,170,1) 60%, rgba(0,212,255,1) 100%);
`;

export const boxForm = styled.div`
    width: 400px;
    background-color: #ececf7;
    border-radius: 10px;
    box-shadow: 2px 2px 100px #7cceda;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 25px;

    &.login {
        height: 60%;
    }

    &.register {
        min-height: 60%;
    }

    &.padding {
        padding-bottom: 55px;
    }
`;

export const titleForm = styled.div`
    font-size: 22px;
    color: #828282;
    font-weight: 500;
`;

export const Form = styled.form`
    margin-top: 40px;
    width: 80%;
    height: 100%;
    position: relative;
`;

export const labelForm = styled.label`
    width: 100%;
    height: auto;

    &.margin-bot {
        margin-bottom: 30px;
    }
`

export const titleInput = styled.div`
    font-size: 16px;
    color: #828282;
    margin-bottom: 10px;
`;

export const input = styled.input`
    width: 100%;
    min-height: 45px;
    height: auto;
    border: 1.2px solid #828282;
    box-shadow: 0px 3.29812px 17.3151px rgba(166, 181, 235, 0.1);
    border-radius: 5px;
    color: black;
    font-size: 14px;
    padding-left: 20px;

    :focus {
        outline: none;
    }
`

export const buttonForm = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #1a91aa;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;

    &.register {
        bottom: -40px;
    }
`;

