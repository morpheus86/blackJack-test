import { ICard } from '../types';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

export const initializeDeck = async (): Promise<string> => {
  const response = await fetch(`${API_BASE_URL}/new/shuffle/?deck_count=1`);
  const data = await response.json();
  return data.deck_id;
};

export const drawCards = async (deckId: string, count: number): Promise<ICard[]> => {
  const response = await fetch(`${API_BASE_URL}/${deckId}/draw/?count=${count}`);
  const data = await response.json();
  return data.cards;
};

export const reshuffleDeck = async (deckId: string): Promise<void> => {
  await fetch(`${API_BASE_URL}/${deckId}/shuffle`);
};