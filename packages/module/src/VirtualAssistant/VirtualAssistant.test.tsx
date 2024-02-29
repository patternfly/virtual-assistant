import React from 'react';
import { render } from '@testing-library/react';
import VirtualAssistant from './VirtualAssistant';

describe('VirtualAssistant', () => {

  it('should render assistant', () => {
    const { container } = render(<VirtualAssistant />);
    expect(container).toMatchSnapshot();
  });

});
