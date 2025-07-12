import React from 'react';
import './App.css';
import aboutImage from './about.jpg'
import benefitsImage from './benefits.jpg'

function App() {
  return (
    <div className="app">
      {/* Первый экран - герой-блок */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Home Chef</h1>
          <p className="tagline">We are cooking for you</p>
        </div>
        <div className="hero-image">
          {/* Здесь будет фоновое изображение */}
        </div>
      </section>

       {/* Второй экран - "О нас" */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>О нас</h2>
            <p>Мы - молодая команда Home Chef, создающая платформу для тех, кто ценит домашнюю кухню. 
            Наши повара готовят с душой, используя только свежие продукты.</p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="Наша команда" />
          </div>
        </div>
      </section>

        {/* Третий экран - "Преимущества" (изображение слева) */}
      <section className="benefits-section">
        <div className="benefits-content">
          <div className="benefits-image">
            <img src={benefitsImage} alt="Преимущества" />
          </div>
          <div className="benefits-text">
            <h2>Почему выбирают нас</h2>
            <ul>
              <li>Настоящий домашний вкус</li>
              <li>Проверенные повара с рейтингами</li>
              <li>Разнообразное меню каждый день</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;