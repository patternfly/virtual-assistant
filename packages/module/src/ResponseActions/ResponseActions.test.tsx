import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResponseActions from './ResponseActions';
import userEvent from '@testing-library/user-event';

const ALL_ACTIONS = [
  { type: 'positive', label: /Good response/i },
  { type: 'negative', label: /Bad response/i },
  { type: 'copy', label: /Copy/i },
  { type: 'share', label: /Share/i },
  { type: 'listen', label: /Listen/i }
];

describe('ResponseActions', () => {
  it('should render buttons correctly', () => {
    ALL_ACTIONS.forEach(({ type, label }) => {
      render(<ResponseActions actions={{ [type]: { onClick: jest.fn() } }} />);
      expect(screen.getByRole('button', { name: label })).toBeTruthy();
    });
  });

  it('should be able to call onClick correctly', async () => {
    ALL_ACTIONS.forEach(async ({ type, label }) => {
      const spy = jest.fn();
      render(<ResponseActions actions={{ [type]: { onClick: spy } }} />);
      await userEvent.click(screen.getByRole('button', { name: label }));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  it('should be able to change aria labels', () => {
    const actions = [
      { type: 'positive', ariaLabel: /Thumbs up/i },
      { type: 'negative', ariaLabel: /Thumbs down/i },
      { type: 'copy', ariaLabel: /Copy the message/i },
      { type: 'share', ariaLabel: /Share it with friends/i },
      { type: 'listen', ariaLabel: /Listen up/i }
    ];
    actions.forEach(({ type, ariaLabel }) => {
      render(<ResponseActions actions={{ [type]: { onClick: jest.fn(), ariaLabel } }} />);
      expect(screen.getByRole('button', { name: ariaLabel })).toBeTruthy();
    });
  });

  it('should be able to disable buttons', () => {
    ALL_ACTIONS.forEach(({ type, label }) => {
      render(<ResponseActions actions={{ [type]: { onClick: jest.fn(), isDisabled: true } }} />);
      expect(screen.getByRole('button', { name: label })).toBeDisabled();
    });
  });

  it('should be able to add class to buttons', () => {
    ALL_ACTIONS.forEach(({ type, label }) => {
      render(<ResponseActions actions={{ [type]: { onClick: jest.fn(), className: 'test' } }} />);
      expect(screen.getByRole('button', { name: label })).toHaveClass('test');
    });
  });
});
