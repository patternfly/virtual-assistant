import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { SendButton } from './SendButton';
import { TooltipProps } from '@patternfly/react-core';

const renderSend = (props?: { [key: string]: string | Omit<TooltipProps, 'content'> }) => {
  const spy = jest.fn();
  render(<SendButton onClick={spy} {...props} />);
};
describe('Send button', () => {
  it('should render button correctly', () => {
    renderSend();
    expect(screen.getByRole('button', { name: 'Send button' })).toBeTruthy();
  });
  it('should handle onClick correctly', async () => {
    const spy = jest.fn();
    render(<SendButton onClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'Send button' }));
    expect(screen.getByRole('tooltip', { name: 'Send' })).toBeTruthy();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should handle custom tooltip correctly', async () => {
    render(<SendButton onClick={jest.fn} tooltipContent="Test" />);
    await userEvent.click(screen.getByRole('button', { name: 'Send button' }));
    expect(screen.getByRole('tooltip', { name: 'Test' })).toBeTruthy();
  });
  it('should handle className prop', () => {
    renderSend({ className: 'test' });
    expect(screen.getByRole('button', { name: 'Send button' })).toHaveClass('test');
  });

  it('should handle spread props, including aria-label', () => {
    renderSend({ 'aria-label': 'test' });
    expect(screen.getByRole('button', { name: 'test' }));
  });
  it('should handle tooltipProps prop', async () => {
    renderSend({ tooltipProps: { id: 'test' } });
    await userEvent.click(screen.getByRole('button', { name: 'Send button' }));
    expect(screen.getByRole('tooltip', { name: 'Send' })).toHaveAttribute('id', 'test');
  });
});
