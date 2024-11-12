import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileDetails from './FileDetails';

describe('FileDetails', () => {
  it('should render file details', () => {
    const { container } = render(<FileDetails fileName="test.txt" />);
    expect(container).toMatchSnapshot();
  });

  it('should render file details correctly if an extension we support is passed in', () => {
    render(<FileDetails fileName="test.txt" languageTestId="language" />);
    expect(screen.getByText('test')).toBeTruthy();
    expect(screen.getByText('TEXT')).toBeTruthy();
    expect(screen.getByTestId('language')).toBeTruthy();
  });
  it('should skip language if we do not support an extension', () => {
    render(<FileDetails fileName="test.joke" languageTestId="language" />);
    expect(screen.getByText('test')).toBeTruthy();
    expect(screen.queryByTestId('language')).toBeFalsy();
  });
});
