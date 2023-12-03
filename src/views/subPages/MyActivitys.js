import React, { useState, useEffect, } from "react";
import * as S from "../../styles/styleActivity"
import ReactLoading from 'react-loading';

import { ActivityApi } from "servicesApi/ActivityApi";

function MyActivitys() {
    const activityApi = new ActivityApi();

    const [activits, setActivits] = useState([]);
    const [analysis, setAnalysis] = useState({
        habilidade: [{ nome: "", nota: "" }],
        materia: "",
        feedback: ""
    });
    const [showCode, setShowCode] = useState();
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        activityApi.getActivitys(setActivits);
    }, [])

    const convertDateOrder = (date) => {
        let timestamp = new Date(date).getTime();
        timestamp = new Date(parseInt(timestamp));

        return `${timestamp.toLocaleDateString()}`;
    }

    return (
        <>
            {activits.map((item, index) => (
                <>
                    <S.CardActivitys key={index}>
                        <S.CardDate>
                            <S.Date>Data da Criação:</S.Date>
                            <S.Date>{convertDateOrder(item.created_at)}</S.Date>
                        </S.CardDate>
                        <S.CardButtons>
                            <S.Button
                                backgroundColor="#2CA8FF"
                                onClick={() => {
                                    setShowCode(index === showCode ? "" : index)
                                }}
                            >
                                Ver Código
                            </S.Button>
                            <S.Button
                                backgroundColor="#2CA8FF"
                                onClick={() => {
                                    if (showAnalysis === false || showAnalysis !== index) {
                                        setAnalysis({
                                            habilidade: [{ nome: "", nota: "" }],
                                            materia: "",
                                            feedback: ""
                                        })
                                        activityApi.getAnalysis(item.id, setAnalysis, setLoading)
                                    }
                                    setShowAnalysis(index === showAnalysis ? false : index)
                                }}
                            >
                                Analise do código
                            </S.Button>
                        </S.CardButtons>
                    </S.CardActivitys>
                    <S.CardCode key={index} className={showCode === index && "show"}>
                        <S.BoxCode>
                            <pre>{item.code}</pre>
                        </S.BoxCode>
                    </S.CardCode>
                    <S.CardCode key={index} className={showAnalysis === index && "show"}>
                        {!loading ? (
                            <S.BoxCode>
                                <div><strong>Linguagem</strong> {analysis.habilidade.map(item => (
                                    <S.BoxLanguage>
                                        <div>
                                            <strong>Nome</strong>: {item.nome}
                                        </div>
                                        <div>
                                            <strong>Nota</strong>: {item.nota}
                                        </div>
                                    </S.BoxLanguage>
                                ))}</div>
                                <div><strong>Materia</strong>: {analysis.materia}</div>
                                <div><strong>Feedback</strong>: {analysis.feedback}</div>
                            </S.BoxCode>
                        ) : (
                            <div style={{ "width": "100%", "height": "100%", "display": "flex", "justifyContent": "center" }}>
                                <ReactLoading type="spin" color="#7B90B0" height={'5%'} width={'5%'} />
                            </div>
                        )}
                    </S.CardCode>
                </>
            ))}
        </>
    );
}

export default MyActivitys;
