import { useState, useEffect } from 'react';
import { addSeconds } from 'date-fns/fp';

import api from '../helpers/http';
import history from '../history';
import getTokenData from '../helpers/getTokenData';
import UserService from '../services/User';

export default function useAuth() {
  const storeKeyToken = 'x-access-token';
  const storeKeyTokenExpires = 'x-access-token-expires';
  const storeKeyUser = 'x-access-user';
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  const [tokenExpires, setTokenExpires] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentTokenExpires = Number(localStorage.getItem(storeKeyTokenExpires) || 0);
    if (currentTokenExpires) {
      setTokenExpires(currentTokenExpires);
    }

    const currentToken = localStorage.getItem(storeKeyToken);
    if (currentToken) {
      setAuthenticated(true);
      setToken(currentToken);
    }

    const currentUser = localStorage.getItem(storeKeyUser);
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (tokenExpires) {
      const now = new Date().getTime();
      if (now > tokenExpires) {
        handleLogout();
      }
    }
  }, [tokenExpires]);

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await api.post('/auth/login', {
        email,
        password,
      });
      const resultToken = result?.data?.data?.token || '';
      localStorage.setItem(storeKeyToken, resultToken);
      setAuthenticated(true);
      setToken(resultToken);

      const resultTokenExpiresAt = Number(result?.data?.data?.expiresAt || 0);
      const now = new Date();
      const expiresTokenTimestamp = addSeconds(resultTokenExpiresAt, now).getTime();
      setTokenExpires(expiresTokenTimestamp);
      localStorage.setItem(storeKeyTokenExpires, String(expiresTokenTimestamp));

      setUser(getTokenData(resultToken));
      return history.push('/');
    } catch (err: any) {
      return { error: err?.response?.data?.message || 'Auth failed' };
    }
  };

  const handleLogout = () => {
    handleClearToken();
    history.push('/auth/login');
  };

  const handleClearToken = () => {
    setAuthenticated(false);
    localStorage.removeItem(storeKeyToken);
    localStorage.removeItem(storeKeyTokenExpires);
    localStorage.removeItem(storeKeyUser);
    setToken('');
  };

  const getProfile = async () => {
    const token = localStorage.getItem(storeKeyToken);
    if (token) {
      let user = getTokenData(token);
      const profile = await UserService(token).profile();
      user = profile?.data ? { ...user, ...profile.data } : user;
      localStorage.setItem(storeKeyUser, JSON.stringify(user));
      setUser(user);
    }
  };

  return { token, tokenExpires, user, authenticated, loading, handleLogin, handleLogout, handleClearToken, getProfile };
}
