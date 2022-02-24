import React from 'react';
import Footer from '../../components/Footer';
import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'


describe('Footer', () => {
  it('renders a heading', () => {
    render(<Footer />)

    const heading = screen.getByText('Diego Libreros')

    expect(heading).toBeInTheDocument()
  })
})