import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface TileGroupContextProps {
  isHovered: boolean;
  startHover: () => void;
  stopHover: () => void;
}

const HoverContext = createContext<TileGroupContextProps | undefined>(undefined);

export const TileGroupProvider = ({ children }: { children: ReactNode }) => {
  const [isHovered, setHovered] = useState<boolean>(false);

  
  const startHover = useCallback(() => {
    setHovered(true);
  }, []);

  const stopHover = useCallback(() => {
    setHovered(false);
  }, []);


  return (
    <HoverContext.Provider value={{ isHovered, startHover, stopHover }}>
      {children}
    </HoverContext.Provider>
  );
};



export const useHover = (): TileGroupContextProps => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};