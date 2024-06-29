import { useState } from "react";
import Context from "./Context";

type ContextProviderProps = {
  children: React.ReactNode;
};

function ContextProvider({ children }: ContextProviderProps) {
  const [nav, setNav] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const toggleNav = () => {
    setNav((prevState) => !prevState)
  }

  const values = {
    nav,
    loading,
    setLoading,
    toggleNav
  };
  
  return (
    <Context.Provider value={ values }>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider