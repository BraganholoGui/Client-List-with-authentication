import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import * as S from './styles';
import Swal from 'sweetalert2';

function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [loginUser, setLoginUser] = useState(false);

  // useEffect(() => {
  //   // login = 'true';
  // }, [loginUser]);

  function toast(icon: any, msg: any) {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    }).fire({
      icon: icon,
      title: msg
    });
  }

  async function handleSubmit() {
    await api.get('/clients')
      .then(async (response: any) => {
        if (response && response.data) {
          response.data.map((user: any) => {
            if (user.name == userName) {
              setLoginUser(true)
              localStorage.setItem("token", '1')
              localStorage.setItem("user", userName)
              localStorage.setItem("fullUser", JSON.stringify(user))
              localStorage.setItem("clientList", JSON.stringify(response.data))
              toast('success', 'Bem vindo!');
              history.push('/home')
              document.location.reload()
            } else{
              toast('error', 'Erro ao realizar login!');
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
