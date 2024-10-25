import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileDropZone from './FileDropZone';

describe('FileDropZone', () => {
  it('should render file drop zone', () => {
    const { container } = render(<FileDropZone onFileDrop={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
  it('should render children', () => {
    render(<FileDropZone onFileDrop={jest.fn()}>Hi</FileDropZone>);
    expect(screen.getByText('Hi')).toBeTruthy();
  });
});
