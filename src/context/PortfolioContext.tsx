import { createContext, useContext, useState, useRef } from 'react';

export interface PortfolioContextProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  HomeRef: React.MutableRefObject<HTMLElement | null>;
  AboutRef: React.MutableRefObject<HTMLElement | null>;
  ProjectsRef: React.MutableRefObject<HTMLElement | null>;
  ResumeRef: React.MutableRefObject<HTMLElement | null>;
  ContactRef: React.MutableRefObject<HTMLElement | null>;
}

export const PortfolioContext = createContext<null | PortfolioContextProps>(
  null
);

export interface ProviderProps {
  children: JSX.Element;
}

export const PortfolioContextProvider = ({ children }: ProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (localStorage.getItem('theme') === 'dark') {
      return true;
    } else return false;
  });

  const [selectedTab, setSelectedTab] = useState<string>('');

  const HomeRef = useRef<HTMLElement | null>(null);
  const AboutRef = useRef<HTMLElement | null>(null);
  const ProjectsRef = useRef<HTMLElement | null>(null);
  const ResumeRef = useRef<HTMLElement | null>(null);
  const ContactRef = useRef<HTMLElement | null>(null);

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
