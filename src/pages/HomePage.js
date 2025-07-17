import React, { useEffect } from 'react';
import '../assets/styles/HomePage.css';
import aboutImage from '../assets/images/about.jpg';
import benefitsImage from '../assets/images/benefits.jpg';

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0) {
          section.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Инициализация при загрузке
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Первый экран - герой-блок */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Home Chef</h1>
            <p className="tagline">Настоящая домашняя еда от местных поваров</p>
          </div>
          <div className="scroll-hint">↓</div>
        </div>
      </section>

      {/* Второй экран - "О нас" */}
      <section className="about-section">
        <div className="section-content">
          <div className="section-text">
            <h2>О нас</h2>
            <p>
              Мы соединяем домашних поваров с теми, кто ценит настоящую домашнюю еду. 
              Все наши повара проходят строгий отбор и проверку качества.
            </p>
          </div>
          <div className="section-image">
            <img 
              src={aboutImage} 
              alt="Повар готовит еду" 
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Третий экран - "Преимущества" */}
      <section className="benefits-section">
        <div className="section-content">
          <div className="section-image">
            <img 
              src={benefitsImage} 
              alt="Разнообразные домашние блюда" 
              className="benefits-image"
            />
          </div>
          <div className="section-text">
            <h2>Почему выбирают нас</h2>
            <ul className="benefits-list">
              <li>Только проверенные домашние повара</li>
              <li>Свежие продукты в каждом блюде</li>
              <li>Персональный подход к каждому заказу</li>
              <li>Поддержка 24/7</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;