import React, { useState } from 'react';
import ChefCard from '../components/ChefCard';
import './ChefsPage.css';

const ChefsPage = () => {
  // Пример данных (замените на реальные из API)
  const [chefs, setChefs] = useState([
    {
      id: 1,
      name: "Анна Петрова",
      photo: "/images/chef1.jpg",
      specialization: "Домашняя кухня, Русская",
      rating: 4.8,
      reviewsCount: 24,
      distance: 1.2 // км
    },
    {
      id: 2,
      name: "Иван Сидоров",
      photo: "/images/chef2.jpg",
      specialization: "Итальянская",
      rating: 4.9,
      reviewsCount: 31,
      distance: 2.5
    }
  ]);

  // Фильтры
  const [cuisineFilter, setCuisineFilter] = useState('все');

  return (
    <div className="chefs-page">
      <h1>Наши повара</h1>
      
      <div className="filters">
        <select 
          value={cuisineFilter}
          onChange={(e) => setCuisineFilter(e.target.value)}
        >
          <option value="все">Все кухни</option>
          <option value="русская">Русская</option>
          <option value="итальянская">Итальянская</option>
          <option value="азиатская">Азиатская</option>
        </select>
      </div>

      <div className="chefs-grid">
        {chefs.map(chef => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default ChefsPage;