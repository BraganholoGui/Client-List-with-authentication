import React, { useEffect, useState } from 'react';
import * as S from './styles';

function Login() {

  // useEffect(() => {
  // }, []);

  return (
    <S.ContainerBody>
      <S.ContainerAll>
        <S.TitleLogin>
          Login
        </S.TitleLogin>
        <hr style={{ width: '100%' }}></hr>
        <S.ContainerForm>
          <S.Form>
            <S.Label>
              Nome do usuário
            </S.Label>
            <S.InputForm/>  
          </S.Form>
        </S.ContainerForm>
      </S.ContainerAll>
    </S.ContainerBody>
  );
}

export default Login;
