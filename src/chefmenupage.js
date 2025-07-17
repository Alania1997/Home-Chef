import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ChefMenuPage.css';

const ChefMenuPage = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);
  const [dishes, setDishes] = useState([]);

  // Загрузка данных повара и его меню (замените на реальный API-запрос)
  useEffect(() => {
    // Пример данных
    setChef({
      id: 1,
      name: "Анна Петрова",
      specialization: "Домашняя кухня"
    });

    setDishes([
      { id: 1, name: "Борщ", price: 350, description: "Свекольный суп со сметаной" },
      { id: 2, name: "Котлеты по-киевски", price: 420, description: "С картофельным пюре" }
    ]);
  }, [id]);

  if (!chef) return <div>Загрузка...</div>;

  return (
    <div className="chef-menu-page">
      <h1>Меню повара: {chef.name}</h1>
      <p>Специализация: {chef.specialization}</p>
      
      <div className="dishes-list">
        {dishes.map(dish => (
          <div key={dish.id} className="dish-card">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <div className="dish-price">{dish.price} ₽</div>
            <button className="order-btn">Заказать</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefMenuPage;