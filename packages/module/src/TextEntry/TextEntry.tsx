import React, { FunctionComponent } from 'react';

import ReactMarkdown from 'react-markdown';

interface TextEntryProps {
  content: string;
  preview: boolean;
}

export const TextEntry: FunctionComponent<TextEntryProps> = ({ content, preview }) => (
  <ReactMarkdown
    components={{
      a: ({ ...props }) => {
        let href = props.href;
        if (href && href.startsWith('/')) {
          if (preview) {
            href = `/preview${href}`;
          }
          href = `${window.location.origin}${href}`;
        }
        return (
          <a {...props} href={href} target="_blank" rel="noopener noreferrer">
            {props.children}
          </a>
        );
      },
    }}
  >
    {content}
  </ReactMarkdown>
);

export default TextEntry;