import React, { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import * as S from "../styles/styleLogin";

import { Context } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const { handleLogin } = useContext(Context);// eslint-disable-line no-unused-vars

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await handleLogin(email, password)

    if (data) {
      navigate('/dash')
    }
  };

  return (
    <S.bgAuth>
      <S.container>
        <S.boxForm className="login">
          <S.titleForm>
            Faça login para continuar
          </S.titleForm>
          <S.Form onSubmit={handleSubmit}>
            <S.labelForm className="margin-bot">
              <S.titleInput>
                Email
              </S.titleInput>
              <S.input type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }} />
            </S.labelForm>
            <S.labelForm>
              <S.titleInput>
                Senha
              </S.titleInput>
              <S.input type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }} />
            </S.labelForm>
            <S.buttonForm type="submit" value="Login" />
          </S.Form>
          <S.linkBox>Ainda não possue conta? <S.link href="/auth/register">Registra-se</S.link></S.linkBox>
        </S.boxForm>
      </S.container>
    </S.bgAuth>
  );
}

export default LoginPage;
