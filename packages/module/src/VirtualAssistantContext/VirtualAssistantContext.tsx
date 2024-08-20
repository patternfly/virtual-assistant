import React, { createContext, useContext, ReactNode } from 'react';

interface VirtualAssistantContextValues {
  /** Default icon for assistant's messages */
  assistantIcon: React.ComponentType;
}

const VirtualAssistantContext = createContext<VirtualAssistantContextValues | undefined>(undefined);

export const VirtualAssistantProvider: React.FC<{ 
  assistantIcon: React.ComponentType; 
  children: ReactNode 
}> = ({ assistantIcon, children }) => (
  <VirtualAssistantContext.Provider value={{ assistantIcon }}>
    {children}
  </VirtualAssistantContext.Provider>
);

export const useVirtualAssistantContext = (): VirtualAssistantContextValues => {
  const context = useContext(VirtualAssistantContext);
  if (context === undefined) {
    throw new Error('useAssistantContext must be used within an AssistantProvider');
  }
  return context;
};
