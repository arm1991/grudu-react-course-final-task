import { createContext, useCallback, useMemo, useState } from 'react';

type ContextInitialStateType = {
  isCookiesAllowed: null | boolean;
  acceptCookies: () => void;
  denyCookies: () => void;
  getState: () => boolean;
};

const contextInitialState = {
  isCookiesAllowed: null,
  acceptCookies: () => {},
  denyCookies: () => {},
  getState: () => false,
};

const CookiesContext = createContext<ContextInitialStateType>(contextInitialState);

function CookiesProvider({ children }: { children: React.ReactNode }) {
  const [isCookiesAllowed, setIsCookiesAllowed] = useState<null | boolean>(null);

  const acceptCookies = useCallback(() => {
    setIsCookiesAllowed(true);
  }, [isCookiesAllowed]);

  const denyCookies = () => {
    setIsCookiesAllowed(false);
  };

  const getState = () => {
    if (isCookiesAllowed !== null) {
      return isCookiesAllowed;
    }
    return false;
  };

  const contextValue = useMemo(
    () => ({ isCookiesAllowed, acceptCookies, denyCookies, getState }),
    [isCookiesAllowed],
  );

  return <CookiesContext.Provider value={contextValue}>{children}</CookiesContext.Provider>;
}

export { CookiesContext, CookiesProvider };
