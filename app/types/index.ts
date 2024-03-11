export interface ICard {
  image: string;
  value: string; // 'ACE', '2', '3', ..., 'KING'
  suit: string;  // 'HEARTS', 'DIAMONDS', 'CLUBS', 'SPADES'
};

export interface IHandProps {
  cards: ICard[];
}