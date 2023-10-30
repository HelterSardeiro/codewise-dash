import React, { useContext, useState } from "react";
import NotificationAlert from "react-notification-alert";

import IconEmail from "assets/img/email.png"
import IconKey from "assets/img/key.png"

import { NavLink } from "react-router-dom";
import history from "services/history";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import * as S from "../styles/styleLogin";

// reactstrap components
import {
    Card,
    CardBody,
    CardHeader,
    Container,
} from "reactstrap";
import { Context } from "context/AuthContext";
import bgImage from "assets/img/login.png";



function RegisterPage() {
    //const { handleLogin } = useContext(Context);// eslint-disable-line no-unused-vars

    const notificationAlert = React.useRef();
    const [username, setUsername] = React.useState("");
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

    return (
        <S.bgAuth>
            <S.container>
                <S.boxForm className="padding register">
                    <S.titleForm>
                        Cadastre-se
                    </S.titleForm>
                    <S.Form>
                        <S.labelForm>
                            <S.titleInput>Nome</S.titleInput>
                            <S.input type="password" placeholder="Nome"/>
                        </S.labelForm>
                        <S.labelForm >
                            <S.titleInput>Email</S.titleInput>
                            <S.input type="text" placeholder="Email"/>
                        </S.labelForm>
                        <S.labelForm>
                            <S.titleInput>Senha</S.titleInput>
                            <S.input type="password" placeholder="Senha"/>
                        </S.labelForm>
                        <S.labelForm>
                            <S.titleInput>Cpf</S.titleInput>
                            <S.input type="text" placeholder="Cpf"/>
                        </S.labelForm>
                        <S.labelForm>
                            <S.titleInput>Phone</S.titleInput>
                            <S.input type="text" placeholder="Phone"/>
                        </S.labelForm>
                        <S.labelForm>
                            <S.titleInput>Address</S.titleInput>
                            <S.input type="text" placeholder="Address"/>
                        </S.labelForm>
                        <S.buttonForm type="submit" value="Login" className="register"/>
                    </S.Form>
                </S.boxForm>
            </S.container>
        </S.bgAuth>
    );
}

export default RegisterPage;
