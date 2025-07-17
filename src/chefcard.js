import React from 'react';
import { Link } from 'react-router-dom';
import './ChefCard.css';

const ChefCard = ({ chef }) => {
  return (
    <div className="chef-card">
      <img src={chef.photo} alt={chef.name} className="chef-photo" />
      <div className="chef-info">
        <h3>{chef.name}</h3>
        <p>Специализация: {chef.specialization}</p>
        <div className="chef-rating">
          ★ {chef.rating.toFixed(1)} ({chef.reviewsCount} отзывов)
        </div>
        <Link to={`/chefs/${chef.id}/menu`} className="view-menu-btn">
          Посмотреть меню
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;