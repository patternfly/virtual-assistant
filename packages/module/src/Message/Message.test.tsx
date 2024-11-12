import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Message from './Message';
import userEvent from '@testing-library/user-event';

const ALL_ACTIONS = [
  { label: /Good response/i },
  { label: /Bad response/i },
  { label: /Copy/i },
  { label: /Share/i },
  { label: /Listen/i }
];

const UNORDERED_LIST = `
  Here is an unordered list:

  * Item 1
  * Item 2
  * Item 3
`;

const ORDERED_LIST = `
  Here is an ordered list:

  1. Item 1
  2. Item 2
  3. Item 3
`;

const CODE_MESSAGE = `
Here is some YAML code:

~~~yaml
apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
  name: azure-sample-repo0oooo00ooo
spec:
  connectionConfig:
  url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs
~~~`;

const CODE = `
apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
  name: azure-sample-repo0oooo00ooo
spec:
  connectionConfig:
  url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs
`;

const INLINE_CODE = `Here is an inline code - \`() => void\``;

const checkListItemsRendered = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  items.forEach((item) => {
    // list item text gets wrapped in a span by the third-party library so we can't just check the listitem
    expect(screen.getByText(item)).toBeTruthy();
  });
};

describe('Message', () => {
  it('should render user messages correctly', () => {
    render(<Message role="user" name="User" content="Hi" />);
    expect(screen.getByText('User')).toBeTruthy();
    expect(screen.getByText('Hi')).toBeTruthy();
    const date = new Date();
    expect(screen.getByText(`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`)).toBeTruthy();
    expect(screen.queryByText('Loading message')).toBeFalsy();
  });
  it('should render bot messages correctly', () => {
    render(<Message role="bot" name="Bot" content="Hi" />);
    expect(screen.getByText('Bot')).toBeTruthy();
    expect(screen.getByText('AI')).toBeTruthy();
    expect(screen.getByText('Hi')).toBeTruthy();
    const date = new Date();
    expect(screen.getByText(`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`)).toBeTruthy();
  });
  it('should render avatar correctly', () => {
    render(<Message role="bot" name="Bot" content="Hi" avatar="./testImg" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', './testImg');
  });
  it('should render botWord correctly', () => {
    render(<Message role="bot" name="Bot" content="Hi" botWord="人工知能" />);
    expect(screen.getByText('Bot')).toBeTruthy();
    expect(screen.getByText('人工知能')).toBeTruthy();
    expect(screen.queryByText('AI')).toBeFalsy();
    expect(screen.getByText('Hi')).toBeTruthy();
  });
  it('should render timestamps', () => {
    render(<Message role="bot" name="Bot" content="Hi" timestamp="2 hours ago" />);
    expect(screen.getByText('Bot')).toBeTruthy();
    expect(screen.getByText('AI')).toBeTruthy();
    expect(screen.getByText('Hi')).toBeTruthy();
    expect(screen.getByText('2 hours ago')).toBeTruthy();
    const date = new Date();
    expect(screen.queryByText(`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`)).toBeFalsy();
  });
  it('should render attachments', () => {
    render(<Message role="user" content="Hi" attachmentName="testAttachment" />);
    expect(screen.getByText('Hi')).toBeTruthy();
    expect(screen.getByText('testAttachment')).toBeTruthy();
  });
  it('should be able to click attachments', async () => {
    const spy = jest.fn();
    render(<Message role="user" content="Hi" attachmentName="testAttachment" onAttachmentClick={spy} />);
    expect(screen.getByText('Hi')).toBeTruthy();
    expect(screen.getByText('testAttachment')).toBeTruthy();
    await userEvent.click(screen.getByRole('button', { name: /testAttachment/i }));
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should be able to close attachments', async () => {
    const spy = jest.fn();
    render(
      <Message role="user" content="Hi" attachmentId="001" attachmentName="testAttachment" onAttachmentClose={spy} />
    );
    expect(screen.getByText('Hi')).toBeTruthy();
    expect(screen.getByText('testAttachment')).toBeTruthy();
    await userEvent.click(screen.getByRole('button', { name: /close testAttachment/i }));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('001');
  });
  it('should render loading state', () => {
    render(<Message role="bot" name="Bot" content="Hi" isLoading />);
    expect(screen.getByText('Bot')).toBeTruthy();
    expect(screen.getByText('AI')).toBeTruthy();
    expect(screen.queryByText('Hi')).toBeFalsy();
    const date = new Date();
    expect(screen.getByText(`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`)).toBeTruthy();
    expect(screen.getByText('Loading message')).toBeTruthy();
  });
  it('should be able to show sources', async () => {
    render(
      <Message
        role="bot"
        name="Bot"
        content="Hi"
        sources={{
          sources: [
            {
              title: 'Getting started with Red Hat OpenShift',
              link: '#',
              body: 'Red Hat OpenShift on IBM Cloud is a managed offering to create your own cluster of compute hosts where you can deploy and manage containerized apps on IBM Cloud ...'
            }
          ]
        }}
      />
    );
    expect(screen.getByText('Getting started with Red Hat OpenShift')).toBeTruthy();
  });
  it('should not show sources if loading', () => {
    render(
      <Message
        role="bot"
        name="Bot"
        content="Hi"
        isLoading
        sources={{
          sources: [
            {
              title: 'Getting started with Red Hat OpenShift',
              link: '#',
              body: 'Red Hat OpenShift on IBM Cloud is a managed offering to create your own cluster of compute hosts where you can deploy and manage containerized apps on IBM Cloud ...'
            }
          ]
        }}
      />
    );
    expect(screen.getByText('Loading message')).toBeTruthy();
    expect(screen.queryByText('Getting started with Red Hat OpenShift')).toBeFalsy();
  });
  it('should be able to show actions', async () => {
    render(
      <Message
        role="bot"
        name="Bot"
        content="Hi"
        actions={{
          // eslint-disable-next-line no-console
          positive: { onClick: () => console.log('Good response') },
          // eslint-disable-next-line no-console
          negative: { onClick: () => console.log('Bad response') },
          // eslint-disable-next-line no-console
          copy: { onClick: () => console.log('Copy') },
          // eslint-disable-next-line no-console
          share: { onClick: () => console.log('Share') },
          // eslint-disable-next-line no-console
          listen: { onClick: () => console.log('Listen') }
        }}
      />
    );
    ALL_ACTIONS.forEach(({ label }) => {
      expect(screen.getByRole('button', { name: label })).toBeTruthy();
    });
  });
  it('should not show actions if loading', async () => {
    render(
      <Message
        role="bot"
        name="Bot"
        content="Hi"
        isLoading
        actions={{
          // eslint-disable-next-line no-console
          positive: { onClick: () => console.log('Good response') },
          // eslint-disable-next-line no-console
          negative: { onClick: () => console.log('Bad response') },
          // eslint-disable-next-line no-console
          copy: { onClick: () => console.log('Copy') },
          // eslint-disable-next-line no-console
          share: { onClick: () => console.log('Share') },
          // eslint-disable-next-line no-console
          listen: { onClick: () => console.log('Listen') }
        }}
      />
    );
    expect(screen.getByText('Loading message')).toBeTruthy();
    ALL_ACTIONS.forEach(({ label }) => {
      expect(screen.queryByRole('button', { name: label })).toBeFalsy();
    });
  });
  it('should render unordered lists correctly', () => {
    render(<Message role="user" name="User" content={UNORDERED_LIST} />);
    expect(screen.getByText('Here is an unordered list:')).toBeTruthy();
    checkListItemsRendered();
  });
  it('should render ordered lists correctly', () => {
    render(<Message role="user" name="User" content={ORDERED_LIST} />);
    expect(screen.getByText('Here is an ordered list:')).toBeTruthy();
    checkListItemsRendered();
  });
  it('should render inline code', () => {
    render(<Message role="user" name="User" content={INLINE_CODE} />);
    expect(screen.getByText(/() => void/i)).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Copy code button' })).toBeFalsy();
  });
  it('should render code correctly', () => {
    render(<Message role="user" name="User" content={CODE_MESSAGE} />);
    expect(screen.getByText('Here is some YAML code:')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Copy code button' })).toBeTruthy();
    expect(screen.getByText(/apiVersion: helm.openshift.io\/v1beta1/i)).toBeTruthy();
    expect(screen.getByText(/metadata:/i)).toBeTruthy();
    expect(screen.getByText(/name: azure-sample-repo0oooo00ooo/i)).toBeTruthy();
    expect(screen.getByText(/spec/i)).toBeTruthy();
    expect(screen.getByText(/connectionConfig:/i)).toBeTruthy();
    expect(
      screen.getByText(/url: https:\/\/raw.githubusercontent.com\/Azure-Samples\/helm-charts\/master\/docs/i)
    ).toBeTruthy();
  });
  it('can click copy code button', async () => {
    // need explicit setup since RTL stubs clipboard if you do this
    const user = userEvent.setup();
    render(<Message role="user" name="User" content={CODE_MESSAGE} />);
    expect(screen.getByRole('button', { name: 'Copy code button' })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: 'Copy code button' }));
    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText.trim()).toEqual(CODE.trim());
  });
  it('should handle codeBlockProps correctly by spreading it onto the CodeMessage', () => {
    render(<Message role="user" name="User" content={CODE_MESSAGE} codeBlockProps={{ 'aria-label': 'test' }} />);
    expect(screen.getByRole('button', { name: 'test' })).toBeTruthy();
  });
});
