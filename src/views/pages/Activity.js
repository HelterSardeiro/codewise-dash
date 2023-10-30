import React, { useState } from "react";
import MyActivitys from "views/subPages/MyActivitys";
import FormActivity from "views/subPages/FormActivitys";

import * as S from "../../styles/styleActivity"

import { Col } from "reactstrap";

function Activity() {

  const [component, setComponent] = useState("myActivitys");

  function PageComponent() {
    switch (component) {
      case "myActivitys":
        return <MyActivitys />
      case "formActivitys":
        return <FormActivity />
      default:
        return <MyActivitys />
    }
  }
  return (
    <>
      <S.container>
        <Col style={{ paddingRight: "0", paddingLeft: "0" }}>
          <S.HeaderActivitys>
            <h3>
              Atividades
            </h3>
          </S.HeaderActivitys>
          <S.BodyActivitys>
            <S.BoxMenu>
              <S.Menu>
                <S.MenuOptions className={`${component === 'myActivitys' ? "select" : ""}`} onClick={() => {
                  setComponent("myActivitys")
                }}>
                  Minhas Atividades
                </S.MenuOptions>
                <S.MenuOptions className={`${component === 'formActivitys' ? "select" : ""}`} onClick={() => {
                  setComponent("formActivitys")
                }}>
                  Criar Atividade
                </S.MenuOptions>
              </S.Menu>

            </S.BoxMenu>
            <S.BoxActivitys>
              {PageComponent()}
            </S.BoxActivitys>
          </S.BodyActivitys>
        </Col>
      </S.container >
    </>
  );
}

export default Activity;
