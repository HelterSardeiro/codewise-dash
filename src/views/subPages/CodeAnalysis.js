import React, { useState } from "react";
import * as S from "../../styles/styleActivity"

import { Col } from "reactstrap";

function CodeAnalysis() {

    return (
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
                            <S.MenuOptions className="select">
                                Analise de Código
                            </S.MenuOptions>
                        </S.Menu>

                    </S.BoxMenu>
                    <S.BoxActivitys>

                        <div>
                            Analise de codigo
                        </div>
                    </S.BoxActivitys>
                </S.BodyActivitys>
            </Col>
        </S.container >
    );
}

export default CodeAnalysis;
