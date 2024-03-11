import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '../components/Card';

describe('Card', () => {
  test('renders the card with the correct suit and value', () => {
    render(<Card image="url-to-image" value="ACE" suit="SPADES" />);
    const cardElement = screen.getByAltText('ACE of SPADES');
    expect(cardElement).toBeInTheDocument();
  });
});