import { calculateHandValue } from '../utils/gameLogic';

describe('calculateHandValue', () => {
  test('correctly calculates hand value without Aces', () => {
    const hand = [{ value: '10', suit: 'HEARTS' }, { value: 'KING', suit: 'SPADES' }];
    expect(calculateHandValue(hand)).toBe(20);
  });

  test('correctly calculates hand value with Aces', () => {
    const hand = [{ value: 'ACE', suit: 'DIAMONDS' }, { value: '3', suit: 'CLUBS' }];
    expect(calculateHandValue(hand)).toBe(14);
  });

  test('adjusts Ace value to avoid busting', () => {
    const hand = [{ value: 'ACE', suit: 'HEARTS' }, { value: '10', suit: 'SPADES' }, { value: '5', suit: 'CLUBS' }];
    expect(calculateHandValue(hand)).toBe(16);
  });
});