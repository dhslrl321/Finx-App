import React, { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [test, setTest] = useState("성공!!");

  return (
    <GlobalContext.Provider value={{ data: { test } }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useDate = () => {
  const {
    data: { test },
  } = useContext(GlobalContext);
  return test;
};

export default GlobalContextProvider;
