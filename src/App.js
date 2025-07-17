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
            <p>О нас

Мы — молодая команда Home Chef, создающая платформу для тех, кто ценит домашнюю кухню. Наша миссия — сделать вкусную еду доступной и удобной для каждого, не теряя при этом тепла и аромата семейного ужина.

Наша цель — объединить людей, которые умеют готовить и любят это делать, с теми, кто не успевает или просто не хочет тратить время на приготовление блюд. Мы уверены, что кулинарные навыки — это не только хобби, но и способ поддержать других, поделиться своим талантом и даже заработать.

Каждый повар на нашем сайте проходит тщательную верификацию: мы проверяем его опыт, отзывы, качество блюд и отношение к клиентам. Мы стараемся полностью контролировать процесс, чтобы каждый заказ был не просто сытным, а настоящим удовольствием.

Home Chef — это не просто сервис доставки еды. Это сообщество, где можно найти вкусный обед, поддержку и вдохновение. Мы стремимся к тому, чтобы каждый день был чуть-чуть лучше, а каждый ужин — чуть-чуть вкуснее.</p>
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
              <li>Настоящий домашний вкус
Мы верим, что еда должна вдохновлять, радовать и напоминать о семейных традициях. Все блюда готовятся по авторским рецептам, с любовью и заботой — как дома.</li>
              <li>Проверенные повара с рейтингами
Каждый кулинар на нашей платформе прошел строгую проверку: мы анализируем отзывы, качество блюд и отношение к клиентам. Вы можете быть уверены, что заказываете у профессионалов, которые действительно умеют готовить.</li>
              <li>Разнообразное меню каждый день
У нас нет шаблонов и повторений. Каждый день вы найдете новые блюда от разных поваров — от классических блюд до необычных креативных рецептов. Всегда есть что выбрать!</li>
              <li>Гибкие условия заказа
Вы можете заказать блюдо на завтрак, обед или ужин — в нужное время и в нужном количестве. Подходит как для одного человека, так и для всей семьи..</li>
              <li>Поддержка и обратная связь
Мы всегда на связи, готовы ответить на вопросы и улучшать наш сервис на основе ваших отзывов. Ваше мнение важно для нас!</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;