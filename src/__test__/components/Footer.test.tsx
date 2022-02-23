import React from 'react';
import Footer from '../../components/Footer';
import { render, screen } from '@testing-library/react'


describe('Footer', () => {
  it('renders a Footer', () => {
    render(<Footer />)

    const footer = screen.getByText('Diego Libreros')

    expect(footer).toBeInTheDocument()
  })
})