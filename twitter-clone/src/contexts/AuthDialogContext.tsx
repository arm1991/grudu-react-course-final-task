import { createContext, useMemo, useState } from 'react';

const contextInitialState = { isOpen: false, toggleIsOpen: () => {} };

const AuthDialogContext = createContext(contextInitialState);

function AuthDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const contextValue = useMemo(() => ({ isOpen, toggleIsOpen }), [isOpen, toggleIsOpen]);

  return <AuthDialogContext.Provider value={contextValue}>{children}</AuthDialogContext.Provider>;
}

export { AuthDialogContext, AuthDialogProvider };
