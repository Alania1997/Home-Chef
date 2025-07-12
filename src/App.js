import React, { useEffect } from 'react';
import './App.css';
import aboutImage from './about.jpg'; // Убедитесь, что файл существует
import benefitsImage from './benefits.jpg'; // Убедитесь, что файл существует

function App() {
  useEffect(() => {
    // Добавляем обработчик для плавного скролла
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
    <div className="app">
      {/* Первый экран - герой-блок */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Home Chef</h1>
            <p className="tagline">We are cooking for you</p>
          </div>
          <div className="scroll-hint">↓</div>
        </div>
      </section>

      {/* Второй экран - "О нас" */}
      <section className="about-section">
        <div className="section-content">
          <div className="section-text">
            <h2>О нас</h2>
            <p>Мы - молодая команда Home Chef, создающая платформу для тех, кто ценит домашнюю кухню.</p>
          </div>
          <div className="section-image">
            <img src={aboutImage} alt="О нас" />
          </div>
        </div>
      </section>

      {/* Третий экран - "Преимущества" */}
      <section className="benefits-section">
        <div className="section-content">
          <div className="section-image">
            <img src={benefitsImage} alt="Преимущества" />
          </div>
          <div className="section-text">
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