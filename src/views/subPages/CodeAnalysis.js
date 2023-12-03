import React, { useEffect, useState } from "react";
import * as S from "../../styles/styleActivity"
import { Bar } from 'react-chartjs-2';
import { Col } from "reactstrap";
import ReactLoading from 'react-loading';
import Modal from 'react-modal';

import { ReportApi } from "servicesApi/ReportApi";
import { useNavigate } from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '55%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "30%",
        height: "30%",
        boder: "1px solid #7B90B0"
    },
};

function CodeAnalysis() {
    const navigate = useNavigate();
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
    const [modalIsOpen, setIsOpen] = useState(false);
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

    function toggleModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        reportApi.getReport(setReport, setLoading, setDataGraph, toggleModal)
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
                                        <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={toggleModal}
                                            contentLabel="Example Modal"
                                            style={customStyles}
                                        >
                                            <S.MessageModal>
                                                Não foi possível gerar seu relatório no momento
                                            </S.MessageModal>
                                            <S.BoxButton>
                                                <S.Button backgroundColor="#2CA8FF" onClick={() => {
                                                    setIsOpen(false)
                                                    reportApi.getReport(setReport, setLoading, setDataGraph, toggleModal)
                                                }}>Tentar Novamente</S.Button>
                                                <S.Button backgroundColor="#EF3434" onClick={() => {
                                                    navigate('/dash')
                                                }}>Tentar Mais Tarde</S.Button>
                                            </S.BoxButton>
                                        </Modal>
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
                        <div style={{ "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "flexDirection": "column", "marginTop": "15px" }}>
                            <p style={{ "fontSize": "16px", "color": "#7B90B0", "fontWeight": "600" }}>
                                Seu relátorio está sendo gerado, aguarde um momento...
                            </p>
                            <ReactLoading type="spin" color="#7B90B0" height={'5%'} width={'5%'} />
                        </div>
                    )}

                </S.BodyActivitys>
            </Col>
        </S.container >
    );
}

export default CodeAnalysis;
