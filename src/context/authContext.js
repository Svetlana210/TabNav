import React, {useState, createContext} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [authUser, setAuthUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const value = {
    authUser,
    setAuthUser,
    isAuth,
    setIsAuth,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
