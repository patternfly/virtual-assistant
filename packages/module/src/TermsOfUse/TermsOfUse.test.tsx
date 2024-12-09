import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TermsOfUse from './TermsOfUse';
import { Content } from '@patternfly/react-core';

const handleModalToggle = jest.fn();
const onPrimaryAction = jest.fn();
const onSecondaryAction = jest.fn();

const body = (
  <Content>
    <h1>Heading 1</h1>
    <p>Legal text</p>
  </Content>
);
describe('TermsOfUse', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render modal correctly', () => {
    render(
      <TermsOfUse
        isModalOpen
        onSecondaryAction={onSecondaryAction}
        handleModalToggle={handleModalToggle}
        ouiaId="Terms"
      >
        {body}
      </TermsOfUse>
    );
    expect(screen.getByRole('heading', { name: /Terms of use/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Accept/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Decline/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /Heading 1/i })).toBeTruthy();
    expect(screen.getByText(/Legal text/i)).toBeTruthy();
    expect(screen.getByRole('dialog')).toHaveClass('pf-chatbot__terms-of-use-modal');
    expect(screen.getByRole('dialog')).toHaveClass('pf-chatbot__terms-of-use-modal--default');
  });
  it('should handle image and altText props', () => {
    render(
      <TermsOfUse
        isModalOpen
        onSecondaryAction={onSecondaryAction}
        handleModalToggle={handleModalToggle}
        image="./image.png"
        altText="Test image"
      >
        {body}
      </TermsOfUse>
    );
    expect(screen.getByRole('img')).toBeTruthy();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test image');
  });
  it('should handle className prop', () => {
    render(
      <TermsOfUse
        isModalOpen
        onSecondaryAction={onSecondaryAction}
        handleModalToggle={handleModalToggle}
        className="test"
      >
        {body}
      </TermsOfUse>
    );
    expect(screen.getByRole('dialog')).toHaveClass('pf-chatbot__terms-of-use-modal');
    expect(screen.getByRole('dialog')).toHaveClass('pf-chatbot__terms-of-use-modal--default');
    expect(screen.getByRole('dialog')).toHaveClass('test');
  });
  it('should handle title prop', () => {
    render(
      <TermsOfUse
        isModalOpen
        onSecondaryAction={onSecondaryAction}
        handleModalToggle={handleModalToggle}
        title="Updated title"
      >
        {body}
      </TermsOfUse>
    );
    expect(screen.getByRole('heading', { name: /Updated title/i })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: /Terms of use/i })).toBeFalsy();
  });
  it('should handle primary button prop', () => {
    render(
      <TermsOfUse
        isModalOpen
        onSecondaryAction={onSecondaryAction}
        handleModalToggle={handleModalToggle}
        primaryActionBtn="First"
      >
        {body}
      </TermsOfUse>
    );
    expect(screen.getByRole('button', { name: /First/i })).toBeTruthy();
    expect(screen.queryByRole('button', { name: /Accept/i })).toBeFalsy();
  });
  it('should handle secondary button prop', () => {
    render(
      <TermsOfUse
        isModalOpen
        onSecondaryAction={onSecondaryAction}
        handleModalToggle={handleModalToggle}
        secondaryActionBtn="Second"
      >
        {body}
      </TermsOfUse>
    );
    expect(screen.getByRole('button', { name: /Second/i })).toBeTruthy();
    expect(screen.queryByRole('button', { name: /Deny/i })).toBeFalsy();
  });
  it('should handle primary button click', async () => {
    render(
      <TermsOfUse
        isModalOpen
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
        handleModalToggle={handleModalToggle}
      >
        {body}
      </TermsOfUse>
    );
    await userEvent.click(screen.getByRole('button', { name: /Accept/i }));
    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
    expect(handleModalToggle).toHaveBeenCalledTimes(1);
  });
  it('should handle secondary button click', async () => {
    render(
      <TermsOfUse isModalOpen onSecondaryAction={onSecondaryAction} handleModalToggle={handleModalToggle}>
        {body}
      </TermsOfUse>
    );
    await userEvent.click(screen.getByRole('button', { name: /Decline/i }));
    expect(onSecondaryAction).toHaveBeenCalledTimes(1);
    expect(handleModalToggle).not.toHaveBeenCalled();
  });
});
