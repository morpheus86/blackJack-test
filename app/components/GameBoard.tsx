"use client";

import React, { useEffect, useState } from "react";
import Hand from "./Hand";

import { ICard } from "../types";

import { initializeDeck, drawCards, reshuffleDeck } from "../utils/api";
import { calculateHandValue } from "../utils/gameLogic";

import styles from "./GameBoard.module.css";

const GameBoard: React.FC = () => {
  const [deckId, setDeckId] = useState<string>("");
  const [remaining, setRemaining] = useState<number>(0);
  const [playerHand, setPlayerHand] = useState<ICard[]>([]);
  const [houseHand, setHouseHand] = useState<ICard[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const setupGame = async () => {
      const deckId = await initializeDeck();
      setDeckId(deckId);
      // Initialize with a full deck of 52 cards
      setRemaining(52);
      const playerCards = await drawCards(deckId, 2);
      const houseCards = await drawCards(deckId, 2);
      setPlayerHand(playerCards);
      setHouseHand(houseCards);
    };

    setupGame();
  }, []);

  const handleDrawCards = async (count: number) => {
    if (remaining < count) {
      await reshuffleDeck(deckId);
      setRemaining(52 - count); // Reset remaining cards count after reshuffle
    } else {
      setRemaining(remaining - count);
    }

    return await drawCards(deckId, count);
  };

  const handleHitPlayer = async () => {
    const newCards = await handleDrawCards(1);
    const newHand = [...playerHand, ...newCards];
    setPlayerHand(newHand);

    if (calculateHandValue(newHand) > 21) {
      setGameOver(true);
      setMessage("Bust! You lose.");
    }
  };
  const handleHitDealer = async () => {
    const newCards = await handleDrawCards(1);
    const newHand = [...houseHand, ...newCards];
    setHouseHand(newHand);

    if (calculateHandValue(newHand) > 21) {
      setGameOver(true);
      setMessage("Bust! You Win.");
    }
  };

  const handleStand = () => {
    const playerValue = calculateHandValue(playerHand);
    const houseValue = calculateHandValue(houseHand);

    if (playerValue > houseValue) {
      setMessage("You win!");
    } else if (playerValue < houseValue) {
      setMessage("You lose!");
    } else {
      setMessage("Tie game!");
    }

    setGameOver(true);
  };

  return (
    <div className={styles.gameBoard}>
      <Hand cards={playerHand} />
      <div className={styles.gameButtons}>
        <button onClick={handleHitPlayer} disabled={gameOver}>
          Hit
        </button>
        <button onClick={handleStand} disabled={gameOver}>
          Stand
        </button>
      </div>
      {gameOver && <p className={styles.message}>{message}</p>}
      <h2>House's Hand</h2>
      <Hand cards={houseHand} />
      <div className={styles.gameButtons}>
        <button onClick={handleHitDealer} disabled={gameOver}>
          Hit
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
