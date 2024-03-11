import React from 'react';
import Card from './Card';

import { IHandProps } from '../types';

import styles from './Hand.module.css';

const Hand: React.FC<IHandProps> = ({ cards }) => (
  <div className={styles.hand}>
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default Hand;
