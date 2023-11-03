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
    const token = Cookies.get('@token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(username, password) {

    try {
      const { data } = await api.post('/auth/login', {
        email: username,
        password
      });

      setAuthenticated(true);
      Cookies.set("@token", data.data.accessToken);
      Cookies.set("@userId", data.data.payload.sub);
      api.defaults.headers.Authorization = `Bearer ${data.data.accessToken}`;

      return authenticated;
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
    Cookies.remove("@GLOBAL_TOKEN");
    Cookies.remove("@GLOBAL_BALANCE");
    Cookies.remove("@GLOBAL_TYPE");
    Cookies.remove("@GLOBAL_USER");
    Cookies.remove("@GLOBAL_WALLET");
    Cookies.remove("@GLOBAL_USERNAME");
    Cookies.remove("@GLOBAL_SERVICE_SALE");

    api.defaults.headers.Authorization = undefined;
    window.location.reload();
  }

  return { authenticated, loading, layout, handleLogin, handleLogout, registerUser };
}