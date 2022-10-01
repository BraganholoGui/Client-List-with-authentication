import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import * as S from './styles';

function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState('');

  // useEffect(() => {
  // }, []);

  async function handleSubmit() {
    await api.get('/clients')
      .then(async (response: any) => {
        if (response && response.data) {
          response.data.map((user: any) => {
            console.log(user)
            if (user.name == userName) {
              localStorage.setItem("token", '1')
              localStorage.setItem("user", '1')
              history.push('/home')
              console.log(history)
            }
          })
        }
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
              <S.ButtonForm onClick={handleSubmit}>
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
