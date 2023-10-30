import React, { useState, useEffect, useSyncExternalStore } from "react";
import * as S from "../../styles/styleActivity"

import { ActivityApi } from "servicesApi/ActivityApi";

function MyActivitys() {
    const activityApi = new ActivityApi();

    const [activits, setActivits] = useState([])
    const [showCode, setShowCode] = useState()

    useEffect(() => {
        activityApi.getActivitys(setActivits);
        console.log(activits)
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
                        </S.CardButtons>
                    </S.CardActivitys>
                    <S.CardCode key={index} className={showCode === index && "show"}>
                        <S.BoxCode>
                            <pre>{item.code}</pre>
                        </S.BoxCode>
                    </S.CardCode>
                </>
            ))}
        </>
    );
}

export default MyActivitys;
