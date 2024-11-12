import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingMessage from './LoadingMessage';

describe('LoadingMessage', () => {
  it('should render loading message', () => {
    const { container } = render(<LoadingMessage />);
    expect(container).toMatchSnapshot();
  });
  it('should render loading message correctly', () => {
    render(<LoadingMessage />);
    expect(screen.getAllByText('.')).toBeTruthy();
    expect(screen.getAllByText('.')).toHaveLength(3);
  });
});
