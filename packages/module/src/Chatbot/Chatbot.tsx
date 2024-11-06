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
  /** Ref applied to chatbot  */
  innerRef?: React.Ref<HTMLDivElement>;
}

export enum ChatbotDisplayMode {
  default = 'default',
  embedded = 'embedded',
  docked = 'docked',
  fullscreen = 'fullscreen'
}

const ChatbotBase: React.FunctionComponent<ChatbotProps> = ({
  children,
  displayMode = ChatbotDisplayMode.default,
  isVisible = true,
  className,
  innerRef,
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
      {/* Ref is intended for use with skip to chatbot links, etc. */}
      {/* Motion.div does not accept refs */}
      {isVisible ? (
        <section
          aria-label={props['aria-label'] ?? 'Chatbot'}
          className={`pf-chatbot-container pf-chatbot-container--${displayMode} ${!isVisible ? 'pf-chatbot-container--hidden' : ''}`}
          tabIndex={-1}
          ref={innerRef}
        >
          {children}
        </section>
      ) : undefined}
    </motion.div>
  );
};

const Chatbot = React.forwardRef((props: ChatbotProps, ref: React.Ref<HTMLDivElement>) => (
  <ChatbotBase innerRef={ref} {...props} />
));

export default Chatbot;
