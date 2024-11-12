import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { StopButton } from './StopButton';
import { TooltipProps } from '@patternfly/react-core';

const renderStop = (props?: { [key: string]: string | Omit<TooltipProps, 'content'> }) => {
  const spy = jest.fn();
  render(<StopButton onClick={spy} {...props} />);
};
describe('Stop button', () => {
  it('should render button correctly', () => {
    renderStop();
    expect(screen.getByRole('button', { name: 'Stop button' })).toBeTruthy();
  });
  it('should handle onClick correctly', async () => {
    const spy = jest.fn();
    render(<StopButton onClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'Stop button' }));
    expect(screen.getByRole('tooltip', { name: 'Stop' })).toBeTruthy();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should handle custom tooltip correctly', async () => {
    render(<StopButton onClick={jest.fn} tooltipContent="Test" />);
    await userEvent.click(screen.getByRole('button', { name: 'Stop button' }));
    expect(screen.getByRole('tooltip', { name: 'Test' })).toBeTruthy();
  });
  it('should handle className prop', () => {
    renderStop({ className: 'test' });
    expect(screen.getByRole('button', { name: 'Stop button' })).toHaveClass('test');
  });
  it('should handle spread props, including aria-label', () => {
    renderStop({ 'aria-label': 'test' });
    expect(screen.getByRole('button', { name: 'test' }));
  });
  it('should handle tooltipProps prop', async () => {
    renderStop({ tooltipProps: { id: 'test' } });
    await userEvent.click(screen.getByRole('button', { name: 'Stop button' }));
    expect(screen.getByRole('tooltip', { name: 'Stop' })).toHaveAttribute('id', 'test');
  });
});
