import React from 'react';

function ChefCard({ name, specialty, rating }) {
  return (
    <div className="chef-card">
      <h2>{name}</h2>
      <p><strong>Специализация:</strong> {specialty}</p>
      <p><strong>Рейтинг:</strong> {rating} ★</p>
    </div>
  );
}

export default ChefCard;