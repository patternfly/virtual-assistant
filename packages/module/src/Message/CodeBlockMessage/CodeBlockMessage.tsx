// ============================================================================
// Chatbot Main - Message - Content - Code Block
// ============================================================================
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// Import PatternFly components
import { CodeBlock, CodeBlockAction, CodeBlockCode, Button, Tooltip } from '@patternfly/react-core';

import { CheckIcon } from '@patternfly/react-icons/dist/esm/icons/check-icon';
import { CopyIcon } from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import { ExtraProps } from 'react-markdown';

const CodeBlockMessage = ({
  children,
  className,
  'aria-label': ariaLabel,
  ...props
}: JSX.IntrinsicElements['code'] & ExtraProps) => {
  const [copied, setCopied] = React.useState(false);

  const buttonRef = React.useRef();
  const tooltipID = React.useId();

  const language = /language-(\w+)/.exec(className || '')?.[1];

  // Handle clicking copy button
  const handleCopy = React.useCallback((event, text) => {
    navigator.clipboard.writeText(text.toString());
    setCopied(true);
  }, []);

  // Reset copied state
  React.useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  });

  if (!String(children).includes('\n')) {
    return (
      <code {...props} className="pf-chatbot__message-inline-code">
        {children}
      </code>
    );
  }

  // Setup code block header
  const actions = (
    <>
      <CodeBlockAction>
        {language && <div className="pf-chatbot__message-code-block-language">{language}</div>}
        <Button
          ref={buttonRef}
          aria-label={ariaLabel ?? 'Copy code button'}
          variant="plain"
          className="pf-chatbot__button--copy"
          onClick={(event) => handleCopy(event, children)}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </Button>
        <Tooltip id={tooltipID} content="Copy" position="top" triggerRef={buttonRef} />
      </CodeBlockAction>
    </>
  );

  return (
    <div className="pf-chatbot__message-code-block">
      <CodeBlock actions={actions}>
        <CodeBlockCode>
          {language ? (
            <SyntaxHighlighter {...props} language={language} style={obsidian} PreTag="div" CodeTag="div" wrapLongLines>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <>{children}</>
          )}
        </CodeBlockCode>
      </CodeBlock>
    </div>
  );
};

export default CodeBlockMessage;
