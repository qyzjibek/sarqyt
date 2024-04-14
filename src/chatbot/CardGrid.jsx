import React from 'react';
import SlideCard from './SlideCard';
import './chat.css';

function CardGrid() {
  // You can have your card data in the state or props
  const cards = [
    {
      image: 'sddg',
      bonusAmount: 'Bonus 7200 тг',
      interestRate: '6%'
    },
    {
      image: 'path-to-kaspi-gold-card-image.png',
      bonusAmount: 'Bonus 6600 тг',
      interestRate: '5.5%'
    },
    {
      image: 'path-to-forte-bank-card-image.png',
      bonusAmount: 'Bonus 6000 тг',
      interestRate: '5%'
    }
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <SlideCard
          key={index}
          cardImage={card.image}
          bonusAmount={card.bonusAmount}
          interestRate={card.interestRate}
        />
      ))}
    </div>
  );
}

export default CardGrid;
