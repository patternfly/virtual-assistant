import React from 'react';
import VirtualAssistant from '@patternfly/virtual-assistant/dist/dynamic/VirtualAssistant';
import AssistantMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/AssistantMessageEntry';
import UserMessageEntry from '@patternfly/virtual-assistant/dist/dynamic/UserMessageEntry';
import Citations from '@patternfly/virtual-assistant/dist/dynamic/Citations';

const citations = [
  {
    id: 'citation-1',
    title: 'Using Flex Layout in PatternFly',
    content: 'Flex layout is a powerful utility in PatternFly that allows you to easily create responsive, flexible grid layouts. It provides various options for direction, alignment, and spacing of grid items.',
    ouiaId: 'ouia-citation-1',
  },
  {
    id: 'citation-2',
    title: 'PatternFly Grid System',
    content: 'The PatternFly grid system is built on a flexible 12-column layout, providing consistency and alignment for different screen sizes and device types. It helps in building complex layouts with ease.',
    ouiaId: 'ouia-citation-2',
  },
  {
    id: 'citation-3',
    title: 'Understanding PatternFly Spacing',
    content: 'PatternFly provides a comprehensive set of spacing utilities to help control the margin and padding around elements. These utilities follow a consistent scale to ensure visual rhythm and harmony.',
    ouiaId: 'ouia-citation-3',
  },
  {
    id: 'citation-4',
    title: 'PatternFly Vertical Navigation',
    content: 'Vertical navigation in PatternFly is a crucial layout component for creating side navigation menus. It supports collapsible sections, icons, and badges, making it ideal for hierarchical structures.',
    ouiaId: 'ouia-citation-4',
  },
  {
    id: 'citation-5',
    title: 'Responsive Design with PatternFly',
    content: 'PatternFly ensures responsiveness across different devices by using fluid grids, flexible layouts, and media queries. It allows developers to build layouts that adapt to various screen sizes seamlessly.',
    ouiaId: 'ouia-citation-5',
  },
];

export const BasicExample: React.FunctionComponent = () => (
  <VirtualAssistant>
    <UserMessageEntry>Hello, where can find information about PatternFly layouts?</UserMessageEntry>
    <AssistantMessageEntry>
      Here are resources you may find useful
    </AssistantMessageEntry>
    <Citations citations={citations} />
  </VirtualAssistant>
);
