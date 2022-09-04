import React, { createContext } from 'react';

import useAuth from '../hooks/useAuth';
import useCurrentSchool from '../hooks/useCurrentSchool';
import useCurrentFranchisee from '../hooks/useCurrentFranchisee';

type AuthContextType = {
  token?: string;
  tokenExpires?: number;
  user?: any;
  authenticated?: boolean;
  loading?: boolean;
  handleLogin: (email: string, password: string) => Promise<void | { error: string }>;
  handleLogout: () => void;
  handleClearToken: () => void;
  getProfile: () => void;

  currentSchool?: any;
  changeSchool?: (school: any) => void;
  lastSchool?: string;
  setLastSchool?: (id: string) => void;

  currentFranchisee?: any;
  changeFranchisee?: (school: any) => void;
  lastFranchisee?: string;
  setLastFranchisee?: (id: string) => void;
  franchisee?: any;
};

const Context = createContext({} as AuthContextType);

const AuthProvider: React.FC = ({ children }) => {
  const { token, tokenExpires, user, authenticated, loading, handleLogin, handleLogout, handleClearToken, getProfile } =
    useAuth();
  const { currentSchool, changeSchool, lastSchool, setLastSchool } = useCurrentSchool();
  const { currentFranchisee, changeFranchisee, lastFranchisee, setLastFranchisee } = useCurrentFranchisee();

  return (
    <Context.Provider
      value={{
        token,
        tokenExpires,
        user,
        loading,
        authenticated,
        handleLogin,
        handleLogout,
        handleClearToken,
        getProfile,

        currentSchool,
        changeSchool,
        lastSchool,
        setLastSchool,

        currentFranchisee,
        changeFranchisee,
        lastFranchisee,
        setLastFranchisee,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
