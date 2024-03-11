import { ICard } from '../types';

export const calculateHandValue = (hand: ICard[]): number => {
  let value = 0;
  let aceCount = 0;

  hand.forEach(card => {
      if (['JACK', 'QUEEN', 'KING'].includes(card.value)) {
          value += 10;
      } else if (card.value === 'ACE') {
          aceCount += 1;
          value += 11; // Assume Ace is 11 initially
      } else {
          value += parseInt(card.value);
      }
  });

  while (value > 21 && aceCount > 0) {
      value -= 10; // Convert an Ace from 11 to 1
      aceCount -= 1;
  }

  return value;
};