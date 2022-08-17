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
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  moreInfoIsOpen: boolean;
  setMoreInfoIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
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

  const [link, setLink] = useState('');
  const [moreInfoIsOpen, setMoreInfoIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const [userName, setUserName] = useState('');

  return (
    <PortfolioContext.Provider
      value={{
        userName,
        setUserName,
        setIsDark,
        selectedTab,
        setSelectedTab,
        isDark,
        HomeRef,
        AboutRef,
        ProjectsRef,
        ResumeRef,
        ContactRef,
        link,
        setLink,
        text,
        setText,
        loading,
        setLoading,
        moreInfoIsOpen,
        setMoreInfoIsOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () =>
  useContext(PortfolioContext) as PortfolioContextProps;
