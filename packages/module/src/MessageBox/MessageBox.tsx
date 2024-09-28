// ============================================================================
// Chatbot Main - Messages
// ============================================================================
import React from 'react';
import JumpButton from './JumpButton';

export interface MessageBoxProps extends React.HTMLProps<HTMLDivElement> {
  /** Content to be displayed in the message box */
  children: React.ReactNode;
  /** Custom classname for the MessageBox component */
  className?: string;
}

const MessageBox: React.FunctionComponent<MessageBoxProps> = ({ children, className }: MessageBoxProps) => {
  const [atTop, setAtTop] = React.useState(false);
  const [atBottom, setAtBottom] = React.useState(true);
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const messageBoxRef = React.useRef<HTMLDivElement>(null);

  // Configure handlers
  const handleScroll = React.useCallback(() => {
    const element = messageBoxRef.current;
    if (element) {
      const { scrollTop, scrollHeight, clientHeight } = element;

      setAtTop(scrollTop === 0);
      setAtBottom(Math.round(scrollTop) + Math.round(clientHeight) >= Math.round(scrollHeight) - 1); // rounding means it could be within a pixel of the bottom
    }
  }, []);

  const checkOverflow = React.useCallback(() => {
    const element = messageBoxRef.current;
    if (element) {
      const { scrollHeight, clientHeight } = element;
      setIsOverflowing(scrollHeight >= clientHeight);
    }
  }, []);

  const scrollToTop = React.useCallback(() => {
    const element = messageBoxRef.current;
    if (element) {
      element.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const scrollToBottom = React.useCallback(() => {
    const element = messageBoxRef.current;
    if (element) {
      element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' });
    }
  }, []);

  // Detect scroll position
  React.useEffect(() => {
    const element = messageBoxRef.current;
    if (element) {
      // Listen for scroll events
      element.addEventListener('scroll', handleScroll);

      // Check initial position and overflow
      handleScroll();
      checkOverflow();

      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, [checkOverflow, handleScroll]);

  return (
    <>
      <JumpButton position="top" isHidden={isOverflowing && atTop} onClick={scrollToTop} />
      <div className={`pf-chatbot__messagebox ${className ?? ''}`} ref={messageBoxRef}>
        {children}
      </div>
      <JumpButton position="bottom" isHidden={isOverflowing && atBottom} onClick={scrollToBottom} />
    </>
  );
};

export default MessageBox;
