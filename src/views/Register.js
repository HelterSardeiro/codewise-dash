import React, { useContext, useState } from "react";

import * as S from "../styles/styleLogin";
import { Context } from "../context/AuthContext";

function RegisterPage() {

    const { registerUser } = useContext(Context);// eslint-disable-line no-unused-vars

    const notificationAlert = React.useRef();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false)

    const notify = (msg, color) => {

        var options = {};
        options = {
            place: "tr",
            message: (
                <div>
                    <div>
                        {msg}
                    </div>
                </div>
            ),
            type: color,
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        registerUser(name, email, password, cpf, address, phone)
    };

    return (
        <S.bgAuth>
            <S.container>
                <S.boxForm className="padding register">
                    <S.titleForm>
                        Cadastre-se
                    </S.titleForm>
                    <S.Form onSubmit={handleSubmit} className="margin">
                        <S.labelForm>
                            <S.titleInput>Nome</S.titleInput>
                            <S.input type="text" placeholder="Nome" value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </S.labelForm>
                        <S.labelForm >
                            <S.titleInput>Email</S.titleInput>
                            <S.input type="text" placeholder="Email" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </S.labelForm>
                        <S.labelForm>
                            <S.titleInput>Senha</S.titleInput>
                            <S.input type="text" placeholder="Senha" value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </S.labelForm>
                        <S.labelForm>
                            <S.titleInput>Cpf</S.titleInput>
                            <S.input type="text" placeholder="Cpf" value={cpf} onChange={(e) => {
                                setCpf(e.target.value)
                            }} />
                        </S.labelForm>
                        <S.labelForm>
                            <S.titleInput>Phone</S.titleInput>
                            <S.input type="text" placeholder="Phone" value={phone} onChange={(e) => {
                                setPhone(e.target.value)
                            }} />
                        </S.labelForm>
                        <S.labelForm>
                            <S.titleInput>Address</S.titleInput>
                            <S.input type="text" placeholder="Address" value={address} onChange={(e) => {
                                setAddress(e.target.value)
                            }} />
                        </S.labelForm>
                        <S.buttonForm type="submit" value="Cadastrar-se" className="register" />
                    </S.Form>
                    <div>Já possui conta? <S.link href="/auth/login">Fazer Login</S.link></div>
                </S.boxForm>
            </S.container>
        </S.bgAuth>
    );
}

export default RegisterPage;
