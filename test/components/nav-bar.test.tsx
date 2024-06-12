import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '@/components/layout/nav-bar/nav-bar';

describe('NavBar', () => {
  it('should render header', () => {
    render(<NavBar />);

    const text = screen.getByText('Podcaster');
    const header = screen.getByTestId('navbar');

    expect(text).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
});
