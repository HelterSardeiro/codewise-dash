import React, { useState } from "react";
import * as S from "../../styles/styleActivity"

import { ActivityApi } from "servicesApi/ActivityApi";

function FormActivity() {
  const activityApi = new ActivityApi();

  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    activityApi.createActivitys({
      code: code
    })
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        Insira Seu Código
      </S.Label>
      <S.TextArea
        value={code}
        onChange={(event) => {
          setCode(event.target.value)
        }}
      />
      <S.ButtonInput type="submit" />
    </S.Form>
  );
}

export default FormActivity;
