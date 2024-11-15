import React from 'react';
import ChatbotToggle from '@patternfly/virtual-assistant/dist/dynamic/ChatbotToggle';

export const BasicDemo: React.FunctionComponent = () => {
  const [chatbotVisible, setChatbotVisible] = React.useState<boolean>(false);

  const closedToggleIcon: () => JSX.Element = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 40.62 36.55"
      style={{ height: '2.5rem', width: '2.5rem' }}
    >
      <defs>
        <style>
          {`
          .cls-1 {
            stroke-width: 0px;
          }
          .eye {
            transform-origin: 50%;
            -webkit-transform-origin: 50%;
            -webkit-animation: blink 5s infinite;
            animation: blink 5s infinite;
          }
          @-webkit-keyframes blink {
            0%, 100% {
              transform: scale(1, 0.05);
            }
            5%, 95% {
              transform: scale(1, 1);
            }
          }
          @keyframes blink {
            0%, 100% {
              transform: scale(1, 0.05);
            }
            5%, 95% {
              transform: scale(1, 1);
            }
          }
        `}
        </style>
      </defs>
      <path
        fill="currentColor"
        id="mouth"
        className="cls-1"
        d="m17.09,30.4c-.6,0-1.2-.2-1.7-.6l-2.2-1.6s-.4-.6.1-1.1c.4-.6,1.2-.4,1.2-.4,0,0,1.2.9,2.1,1.5.3.2.7.3,1,.3l9.3.1s.7.1.7,1.1c0,.6-.7.9-.7.9h-9.8v-.2Z"
      />
      <path
        fill="currentColor"
        id="right_ear"
        data-name="right ear"
        className="cls-1"
        d="m37.29,15.6c1.7,0,3,1.3,3,3v6c0,1.7-1.3,3-3,3h-1v-12h1Z"
      />
      <path
        fill="currentColor"
        id="left_ear"
        data-name="left ear"
        className="cls-1"
        d="m3.29,15.6h1v12h-1c-1.7,0-3-1.3-3-3v-6c0-1.7,1.4-3,3-3Z"
      />
      <circle fill="currentColor" className="cls-1 eye" cx="26.1" cy="18.3" r="2.4" />
      <circle fill="currentColor" className="cls-1 eye" cx="14.5" cy="18.3" r="2.4" />
      <circle fill="currentColor" className="cls-1" cx="14" cy="4" r="1.6">
        <animate attributeName="cx" begin="0s" dur="2s" values="13.5;27;13.5" repeatCount="indefinite" />
      </circle>
      <g id="antennas_copy" data-name="antennas copy">
        <path
          fill="currentColor"
          className="cls-1"
          d="m29.59,9.1h-.7l1.1-2.4h.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5-2.5,1.1-2.5,2.5c0,.8.4,1.4.9,1.9l-1.4,3h-14.3l-1.4-3c.5-.5.8-1.1.8-1.8,0-1.4-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5,1.1,2.5,2.5,2.5c.2,0,.4,0,.6-.1l1.1,2.4h-.9c-2.8,0-5.2,2.3-5.2,5.2v16.7c0,2.8,2.3,5.2,5.2,5.2h18.7c2.8,0,5.2-2.3,5.2-5.2V14.2c0-2.8-2.3-5.1-5.2-5.1Zm3.1,21.8c0,1.7-1.4,3.1-3.1,3.1H10.99c-1.7,0-3.1-1.4-3.1-3.1V14.2c0-1.7,1.4-3.1,3.1-3.1h18.7c1.7,0,3.1,1.4,3.1,3.1v16.7h-.1Z"
        />
      </g>
    </svg>
  );

  return (
    <ChatbotToggle
      toolTipLabel="Virtual assistant"
      isChatbotVisible={chatbotVisible}
      onToggleChatbot={() => setChatbotVisible(!chatbotVisible)}
      closedToggleIcon={closedToggleIcon}
    />
  );
};
