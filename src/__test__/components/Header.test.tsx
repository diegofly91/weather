import React from 'react';
import Header from '../../components/Header';
import { render, screen } from '@testing-library/react'


describe('Footer', () => {
  
  render(<Header />)
  it('renders a header name app Weather', () => {

    const nameApp = screen.getByText('Weather')

    expect(nameApp).toBeInTheDocument()
  })

  /*it('render header name src image to logo', async () => {
    const logo = await screen.findByRole('img');
    console.log(logo)
    expect(logo).toHaveAttribute('src', '/weather-icon.png');
   // expect(logo).toHaveAttribute('alt', 'Logo');
  })*/
});


