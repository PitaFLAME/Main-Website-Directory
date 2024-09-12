import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface TileGroupContextProps {
  isHovered: boolean;
  toggleHover: () => void;
  stopHover: () => void;
}

const HoverContext = createContext<TileGroupContextProps | undefined>(undefined);

export const TileGroupProvider = ({ children }: { children: ReactNode }) => {
  const [isHovered, setHovered] = useState<boolean>(false);

  
  const toggleHover = useCallback(() => {
    setHovered((prev) => !prev);
  }, []);

  const stopHover = useCallback(() => {
    setHovered(false);
  }, []);


  return (
    <HoverContext.Provider value={{ isHovered, toggleHover, stopHover }}>
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