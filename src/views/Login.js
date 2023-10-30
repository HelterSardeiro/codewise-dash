import React, { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import * as S from "../styles/styleLogin";

import { Context } from "../context/AuthContext";

function LoginPage() {
  const { handleLogin } = useContext(Context);// eslint-disable-line no-unused-vars

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(email, password)
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
        </S.boxForm>
      </S.container>
    </S.bgAuth>
  );
}

export default LoginPage;
