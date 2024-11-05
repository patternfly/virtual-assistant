// ============================================================================
// Chatbot
// ============================================================================
import React from 'react';
import { motion } from 'framer-motion';

export interface ChatbotProps {
  /** Content to be displayed in the chatbot */
  children: React.ReactNode;
  /** Display Mode for the Chatbot */
  displayMode?: ChatbotDisplayMode;
  /** Visibility flag for the chatbot */
  isVisible?: boolean;
  /** Custom classname for the Chatbot component */
  className?: string;
}

export enum ChatbotDisplayMode {
  default = 'default',
  embedded = 'embedded',
  docked = 'docked',
  fullscreen = 'fullscreen'
}

export const Chatbot: React.FunctionComponent<ChatbotProps> = ({
  children,
  displayMode = ChatbotDisplayMode.default,
  isVisible = true,
  className,
  ...props
}: ChatbotProps) => {
  // Configure docked mode
  React.useEffect(() => {
    if (displayMode === ChatbotDisplayMode.docked) {
      document.documentElement.classList.add('pf-chatbot-allow--docked');
    } else {
      document.documentElement.classList.remove('pf-chatbot-allow--docked');
    }
  }, [displayMode]);

  // Configure animations
  const motionChatbot = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '16px' }
  };

  return (
    <motion.div
      className={`pf-chatbot pf-chatbot--${displayMode} ${!isVisible ? 'pf-chatbot--hidden' : ''} ${className ?? ''}`}
      variants={motionChatbot}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      {...props}
    >
      {isVisible ? children : undefined}
    </motion.div>
  );
};

export default Chatbot;
