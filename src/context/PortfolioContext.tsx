import { createContext, useContext, useState } from 'react';

export interface PortfolioContextProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PortfolioContext = createContext<null | PortfolioContextProps>(
  null
);

export interface ProviderProps {
  children: JSX.Element;
}

export const PortfolioContextProvider = ({ children }: ProviderProps) => {
  const [isDark, setIsDark] = useState(() => {
    if (localStorage.getItem('theme') === 'light') {
      return false;
    } else return true;
  });

  return (
    <PortfolioContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () =>
  useContext(PortfolioContext) as PortfolioContextProps;
