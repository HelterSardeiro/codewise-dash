import { useState, useEffect } from 'react';
import history from "services/history";
import api from 'services/api';
import Cookies from 'js-cookie';
import encrypt from 'services/encrypt';

export default function useAuth() {

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [layout, setLayout] = useState("");

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, [authenticated]);

  async function handleLogin(username, password) {

    try {
      const { data } = await api.post('/auth/login', {
        email: username,
        password
      });

      Cookies.set("token", data.data.accessToken);
      Cookies.set("@userId", data.data.payload.sub);
      api.defaults.headers.Authorization = `Bearer ${data.data.accessToken}`;
      setAuthenticated(true); // Defina o estado como true após uma autenticação bem-sucedida.

      return true;
    } catch (err) {
      console.log(err)
      alert("Erro ao fazer login")
    }
  }

  async function registerUser(name, email, password, cpf, address, phone) {

    try {
      const { data } = await api.post('/auth/signup', {
        name,
        email,
        password,
        phone,
        cpf,
        address,
      })

      alert("Registro feito com sucesso")
    } catch (err) {
      alert("Erro ao fazer registro")
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    Cookies.remove("token");
    Cookies.remove("@userId");
    api.defaults.headers.Authorization = undefined;
  }

  return { authenticated, loading, layout, handleLogin, handleLogout, registerUser };
}