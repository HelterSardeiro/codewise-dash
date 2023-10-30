import React, { useState } from "react";
import * as S from "../../styles/styleActivity"

import { Col } from "reactstrap";

import CodeAnalysis from "views/subPages/CodeAnalysis";
import CodeCorrection from "views/subPages/CodeCorrection";
import TipsAndSuggestions from "views/subPages/TipsAndSuggestions";

function VirtualAssistant() {

  const [component, setComponent] = useState("codeAnalysis");

  function PageComponent() {
    switch (component) {
      case "codeAnalysis":
        return <CodeAnalysis />
      case "codeCorrection":
        return <CodeCorrection />
        case "tipsAndSuggestions":
          return <TipsAndSuggestions />
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
              Assistente Virtual
            </h3>
          </S.HeaderActivitys>
          <S.BodyActivitys>
            <S.BoxMenu>
              <S.Menu>
                <S.MenuOptions className={`${component === 'codeAnalysis' ? "select" : ""}`} onClick={() => {
                  setComponent("codeAnalysis")
                }}>
                 Analise de Código
                </S.MenuOptions>
                <S.MenuOptions className={`${component === 'codeCorrection' ? "select" : ""}`} onClick={() => {
                  setComponent("codeCorrection")
                }}>
                  Correção de Código
                </S.MenuOptions>
                <S.MenuOptions className={`${component === 'tipsAndSuggestions' ? "select" : ""}`} onClick={() => {
                  setComponent("tipsAndSuggestions")
                }}>
                  Dicas e Sugestões
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

export default VirtualAssistant;
