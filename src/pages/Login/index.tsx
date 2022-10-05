import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import * as S from './styles';
import Swal from 'sweetalert2';
import { useAuth } from '../../contexts/auth';
// import AuthContext from '../../contexts/auth';

function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const { signed, Login } = useAuth();

  async function handleLogin() {
    await Login({
      name: userName,
    });
  }

  return (
    <S.ContainerBody>
      <S.ContainerAll>
        <S.TitleLogin>
          Login
        </S.TitleLogin>
        <hr style={{ width: '100%' }}></hr>
        <S.ContainerForm>
          <S.Form>
            <S.ContainerFields>
              <S.Label>
                Nome do usuário:
              </S.Label>
              <S.InputForm
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value)
                }} />
            </S.ContainerFields>
            <S.ContainerButton>
              <S.ButtonForm onClick={handleLogin}>
                Login
              </S.ButtonForm>
            </S.ContainerButton>
          </S.Form>
        </S.ContainerForm>
      </S.ContainerAll>
    </S.ContainerBody>
  );
}

export default Login;
