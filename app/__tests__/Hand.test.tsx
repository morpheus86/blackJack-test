import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hand from '../components/Hand';

import { ICard } from '../types';

describe('Hand Component', () => {
  test('renders the correct number of cards', () => {
    const mockCards: ICard[] = [
      { image: 'url1', value: 'ACE', suit: 'SPADES' },
      { image: 'url2', value: 'KING', suit: 'HEARTS' }
    ];

    render(<Hand cards={mockCards} />);
    const cardElements = screen.getAllByRole('img');
    expect(cardElements).toHaveLength(2);
  });
});
