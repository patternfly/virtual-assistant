import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileDetailsLabel from './FileDetailsLabel';
import userEvent from '@testing-library/user-event';

describe('FileDetailsLabel', () => {
  it('should render file details label', () => {
    const { container } = render(<FileDetailsLabel fileName="test.txt" />);
    expect(container).toMatchSnapshot();
  });
  it('should render file details correctly if an extension we support is passed in', () => {
    render(<FileDetailsLabel fileName="test.txt" />);
    expect(screen.getByText('test')).toBeTruthy();
    expect(screen.getByText('TEXT')).toBeTruthy();
  });
  it('should skip language if we do not support an extension', () => {
    render(<FileDetailsLabel fileName="test.joke" languageTestId="language" />);
    expect(screen.getByText('test')).toBeTruthy();
    expect(screen.queryByTestId('language')).toBeFalsy();
  });
  it('should not show spinner by default', () => {
    render(<FileDetailsLabel fileName="test.txt" spinnerTestId="spinner" />);
    expect(screen.queryByTestId('spinner')).toBeFalsy();
  });
  it('should show spinner if loading', () => {
    render(<FileDetailsLabel fileName="test.txt" isLoading spinnerTestId="spinner" />);
    expect(screen.getByText('test')).toBeTruthy();
    expect(screen.getByText('TEXT')).toBeTruthy();
    expect(screen.queryByTestId('spinner')).toBeTruthy();
  });
  it('should call onClick prop', async () => {
    const spy = jest.fn();
    render(<FileDetailsLabel fileName="test.txt" onClick={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should call onClose prop', async () => {
    const spy = jest.fn();
    render(<FileDetailsLabel fileName="test.txt" onClose={spy} />);
    await userEvent.click(screen.getByRole('button', { name: /Close test.txt/i }));
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should use closeButtonAriaLabel prop appropriately', () => {
    render(<FileDetailsLabel fileName="test.txt" onClose={jest.fn()} closeButtonAriaLabel="Delete file" />);
    screen.getByRole('button', { name: /Delete file/i });
  });
});
