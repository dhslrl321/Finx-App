import React, { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [test, setTest] = useState("성공!!");

  return (
    <GlobalContext.Provider value={{ data: { test }, fns: { setTest } }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useTestData = () => {
  const {
    data: { test },
  } = useContext(GlobalContext);
  return test;
};

export const useTestFns = () => {
  const {
    fns: { setTest },
  } = useContext(GlobalContext);
  return setTest;
};

export default GlobalContextProvider;
