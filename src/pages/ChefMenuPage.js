import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/ChefMenuPage.css';

const ChefMenuPage = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [chef, setChef] = useState(null);

  useEffect(() => {
    // Здесь будет запрос к API
    const mockMenu = [
      { id: 1, name: "Борщ", price: 350, description: "Свекольный суп" },
      { id: 2, name: "Пельмени", price: 420, description: "Домашние" }
    ];
    setMenu(mockMenu);
    setChef({ name: "Анна Петрова" });
  }, [id]);

  return (
    <div className="chef-menu-page">
      <h1>Меню повара: {chef?.name}</h1>
      <div className="menu-items">
        {menu.map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price} ₽</span>
            <button>Заказать</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefMenuPage;