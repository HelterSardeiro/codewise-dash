import React, { useEffect, useState } from "react";
import * as S from "../../styles/styleActivity"
import { Bar } from 'react-chartjs-2';
import { Col } from "reactstrap";
import ReactLoading from 'react-loading';

import { ReportApi } from "servicesApi/ReportApi";

function CodeAnalysis() {
    const reportApi = new ReportApi();

    const [report, setReport] = useState([{
        reportId: "",
        relatorioCarreira: {
            resumoDesempenho: {
                nivelEstimado: "",
                areasMelhoria: [
                ],
                sugestoesEstudo: [
                ]
            },
            cargosPotenciais: [
            ],
            habilidades: [
                {
                    nome: "",
                    nota: 0,
                    níveldeProficiência: ""
                }
            ],
            atividadesAnteriores: [
                {
                    id: "",
                    descrição: ""
                },
                {
                    id: "",
                    descrição: ""
                },
                {
                    id: "",
                    descrição: ""
                }
            ]
        }
    }
    ]);
    const [loading, setLoading] = useState(false)
    const [showDetails, setShowDetails] = useState();
    const [dataGraph, setDataGraph] = useState({
        labels: [],
        datasets: [
            {
                label: 'Notas',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [],
            },
        ],
    })

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
            },
        },
        bar: {
            categoryPercentage: 0.7, // Ajusta a largura das colunas (de 0 a 1)
            barPercentage: 0.9, // Ajusta a largura das colunas relativa ao espaçamento entre categorias (de 0 a 1)
        },
    };

    useEffect(() => {
        reportApi.getReport(setReport, setLoading, setDataGraph)
    }, [])

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
                                Relatório de Desempenho
                            </S.MenuOptions>
                        </S.Menu>

                    </S.BoxMenu>
                    {!loading ? (
                        <>
                            <S.BoxActivitys className="margin-bot">
                                <S.BoxGraphic>
                                    <Bar data={dataGraph} options={options} style={{ "width": "50%" }} />
                                </S.BoxGraphic>
                            </S.BoxActivitys>
                            <S.BoxActivitys>
                                {report.map((item, index) => (
                                    <>
                                        <S.CardActivitys key={index}>
                                            <S.CardDate>
                                                <S.Date>{item.relatorioCarreira.habilidades[0].nome}</S.Date>
                                            </S.CardDate>
                                            <S.CardButtons>
                                                <S.Button
                                                    backgroundColor="#2CA8FF"
                                                    onClick={() => {
                                                        setShowDetails(index === showDetails ? "" : index)
                                                    }}
                                                >
                                                    Detalhes
                                                </S.Button>
                                            </S.CardButtons>
                                        </S.CardActivitys>
                                        <S.CardCode key={index} className={showDetails === index && "show"}>
                                            <S.BoxCode>
                                                <div><strong>Nivel Estimano</strong>: {item.relatorioCarreira.resumoDesempenho.nivelEstimado}</div>
                                                <div>
                                                    <strong>Areas de Melhoria</strong>:
                                                    {
                                                        item.relatorioCarreira.resumoDesempenho.areasMelhoria.map((item) => (
                                                            <div>{item}</div>
                                                        ))
                                                    }
                                                </div>
                                                <div>
                                                    <strong>Sugestões de Estudo</strong>:
                                                    {
                                                        item.relatorioCarreira.resumoDesempenho.sugestoesEstudo.map((item) => (
                                                            <div>{item}</div>
                                                        ))
                                                    }
                                                </div>
                                                <div>
                                                    <strong>Potenciais Cargos</strong>:
                                                    {
                                                        item.relatorioCarreira.cargosPotenciais.map((item) => (
                                                            <div>{item}</div>
                                                        ))
                                                    }
                                                </div>
                                            </S.BoxCode>
                                        </S.CardCode>
                                    </>
                                ))}
                            </S.BoxActivitys>
                        </>
                    ) : (
                        <div style={{ "width": "100%", "height": "100%", "display": "flex", "justifyContent": "center" }}>
                            <ReactLoading type="spin" color="#7B90B0" height={'5%'} width={'5%'} />
                        </div>
                    )}

                </S.BodyActivitys>
            </Col>
        </S.container >
    );
}

export default CodeAnalysis;
