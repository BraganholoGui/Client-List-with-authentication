import React, { createContext, useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';

import * as actions from '../services/actions';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem('user');
    const storagedToken = localStorage.getItem('token');
    if (storagedToken && storagedUser) {
      setUser({ storagedUser });
      actions.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: { name: string }) {
    const response = await actions.post('https://localhost:3002/clients', userData);
    if (response.data.token) {
      const userLog = response.data.user.name;
      await api.get('/clients')
        .then(async (res: any) => {
          if (res && res.data) {
            await res.data.map(async (user: any) => {
              if (user.name == userLog) {
                setUser(response.data.user);
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", userLog)
                localStorage.setItem("fullUser", JSON.stringify(user))
                localStorage.setItem("clientList", JSON.stringify(res.data))
                await toast('success', 'Bem vindo!');
              }else{
                await toast('error', 'Erro ao realizar login!');
              }
            })
          }
        });
      actions.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    }
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }
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
  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}