import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import GameBoard from '../components/GameBoard';

// Mock the API calls
jest.mock('../utils/api', () => ({
  initializeDeck: jest.fn().mockResolvedValue('test-deck-id'),
  drawCards: jest.fn().mockResolvedValue([
    { image: 'test-url', value: '5', suit: 'HEARTS' },
    { image: 'test-url', value: 'KING', suit: 'SPADES' }
  ]),
  reshuffleDeck: jest.fn()
}));

describe('GameBoard Component', () => {
  test('initializes the game on render', async () => {
    render(<GameBoard />);
    const buttonElements = await screen.findAllByRole('button');
    expect(buttonElements).toHaveLength(2); // Expecting 2 buttons: Hit and Stand
  });
});
