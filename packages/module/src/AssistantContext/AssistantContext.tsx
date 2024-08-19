import React, { createContext, useContext, ReactNode } from 'react';

interface AssistantContextValues {
  /** Default icon for assistant's messages */
  assistantIcon: React.ComponentType;
  /** Removes border radius from the component and its children */
  removeBorderRadius: boolean;
}

const AssistantContext = createContext<AssistantContextValues | undefined>(undefined);

export const AssistantProvider: React.FC<{ 
  assistantIcon: React.ComponentType; 
  removeBorderRadius: boolean; 
  children: ReactNode 
}> = ({ assistantIcon, removeBorderRadius, children }) => (
  <AssistantContext.Provider value={{ assistantIcon, removeBorderRadius }}>
    {children}
  </AssistantContext.Provider>
);

export const useAssistantContext = (): AssistantContextValues => {
  const context = useContext(AssistantContext);
  if (context === undefined) {
    throw new Error('useAssistantContext must be used within an AssistantProvider');
  }
  return context;
};
