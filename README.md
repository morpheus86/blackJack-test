# Blackjack Game

## Overview
This project is a web-based Blackjack game where you play against the house. It's built using Next.js with TypeScript and integrates with the Deck of Cards API for card management. The game follows standard Blackjack rules with some simplifications and customizations.

## Features
- Start a new game with a shuffled deck.
- Player options: Hit or Stand.
- Automatic handling of Ace values (1 or 11).
- Deck persists across hands and reshuffles when low on cards.
- Simple and responsive UI.

## Setup
To get the project up and running on your local machine, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/morpheus86/blackJack-test
   cd blackjack-test
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Project Structure
- `components/`: Contains all the React components.
- `pages/`: Contains page files, with `index.tsx` being the entry point.
- `types/`: Houses TypeScript type definitions.
- `utils/`: Includes utility functions for game logic and API calls.

## Usage
Once you start the development server, you can play the game by:
- Clicking `Hit` to draw a card.
- Clicking `Stand` to end your turn.
- The goal is to have a hand value closer to 21 than the house without going over.