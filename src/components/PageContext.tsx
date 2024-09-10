"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';


interface PageContextType {
  activePage: number;
  setActivePage: (page: number) => void;
}

const defaultContextValue: PageContextType = {
  activePage: 0,
  setActivePage: () => {}
};

const PageContext = createContext<PageContextType>(defaultContextValue);

export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<number>(1);

  return (
    <PageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);