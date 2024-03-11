import React from 'react';

import { ICard } from '../types';

import styles from './Card.module.css';

const Card: React.FC<ICard> = ({ image, value, suit }) => (
  <div className={styles.card}>
    <img src={image} alt={`${value} of ${suit}`} />
  </div>
);

export default Card;
