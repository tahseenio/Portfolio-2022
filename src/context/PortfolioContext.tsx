import { createContext, useContext, useState, useRef } from 'react';

export interface PortfolioContextProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  HomeRef: React.MutableRefObject<any>;
  AboutRef: React.MutableRefObject<any>;
  ProjectsRef: React.MutableRefObject<any>;
  ResumeRef: React.MutableRefObject<any>;
  ContactRef: React.MutableRefObject<any>;
}

export const PortfolioContext = createContext<null | PortfolioContextProps>(
  null
);

export interface ProviderProps {
  children: JSX.Element;
}

export const PortfolioContextProvider = ({ children }: ProviderProps) => {
  const [isDark, setIsDark] = useState(() => {
    if (localStorage.getItem('theme') === 'dark') {
      return true;
    } else return false;
  });

  const [selectedTab, setSelectedTab] = useState('');

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ResumeRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <PortfolioContext.Provider
      value={{
        setIsDark,
        selectedTab,
        setSelectedTab,
        isDark,
        HomeRef,
        AboutRef,
        ProjectsRef,
        ResumeRef,
        ContactRef,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () =>
  useContext(PortfolioContext) as PortfolioContextProps;
