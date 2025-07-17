import React, { useState } from 'react';
import ChefCard from '../components/ChefCard';
import '../assets/styles/ChefsPage.css';

const ChefsPage = () => {
  const [chefs] = useState([
    {
      id: 1,
      name: "Анна Петрова",
      photo: "/images/chef1.jpg",
      specialization: "Русская кухня",
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      name: "Иван Сидоров",
      photo: "/images/chef2.jpg",
      specialization: "Итальянская кухня",
      rating: 4.9,
      reviews: 31
    }
  ]);

  return (
    <div className="chefs-page">
      <h1>Наши повара</h1>
      <div className="chefs-grid">
        {chefs.map(chef => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default ChefsPage;