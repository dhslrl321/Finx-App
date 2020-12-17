import React, { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    token: "",
    userAccount: "",
    authenticated: false,
  });
  return (
    <GlobalContext.Provider value={{ data: { user }, fns: { setUser } }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useUserData = () => {
  const {
    data: { user },
  } = useContext(GlobalContext);
  return user;
};

export const useUserFns = () => {
  const {
    fns: { setUser },
  } = useContext(GlobalContext);
  return setUser;
};

export default GlobalContextProvider;
