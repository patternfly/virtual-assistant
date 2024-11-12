import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatbotWelcomePrompt from './ChatbotWelcomePrompt';
import userEvent from '@testing-library/user-event';

describe('ChatbotWelcomePrompt', () => {
  it('should render welcome prompt', () => {
    const { container } = render(
      <ChatbotWelcomePrompt title="Hello, Chatbot User" description="How may I help you today?" />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    render(<ChatbotWelcomePrompt title="Hello, Chatbot User" description="How may I help you today?" />);
    expect(screen.getByText('Hello, Chatbot User')).toBeTruthy();
    expect(screen.getByText('How may I help you today?')).toBeTruthy();
  });
  it('should render prompts with titles correctly', () => {
    render(
      <ChatbotWelcomePrompt
        title="Hello, Chatbot User"
        description="How may I help you today?"
        prompts={[{ title: 'Topic 1' }]}
      />
    );
    expect(screen.getByText('Topic 1')).toBeTruthy();
  });
  it('should render prompts with messages correctly', () => {
    render(
      <ChatbotWelcomePrompt
        title="Hello, Chatbot User"
        description="How may I help you today?"
        prompts={[{ title: 'Topic 1', message: 'Helpful prompt for Topic 1' }]}
      />
    );
    expect(screen.getByText('Helpful prompt for Topic 1')).toBeTruthy();
  });
  it('should render prompts with onClick correctly', async () => {
    const spy = jest.fn();
    render(
      <ChatbotWelcomePrompt
        title="Hello, Chatbot User"
        description="How may I help you today?"
        prompts={[{ title: 'Topic 1', message: 'Helpful prompt for Topic 1', onClick: spy }]}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: /Topic 1/i }));
    expect(spy).toHaveBeenCalled();
  });
  it('should apply className appropriately', () => {
    render(
      <ChatbotWelcomePrompt
        title="Hello, Chatbot User"
        description="How may I help you today?"
        className="test"
        testId="welcome-prompt"
      />
    );
    const element = screen.getByTestId('welcome-prompt');
    expect(element).toHaveClass('test');
  });
});
