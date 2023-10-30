import React, { createContext } from 'react';

import useAuth from './hooks/userAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, layout, handleLogin, handleLogout, registerUser
  } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, layout, handleLogin, handleLogout, registerUser }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };