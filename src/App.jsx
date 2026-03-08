import { useState } from 'react';
import photo1 from '../photos/photo_2026-03-08 15.43.50.jpeg';
import photo2 from '../photos/photo_2026-03-08 15.43.51.jpeg';
import photo3 from '../photos/photo_2026-03-08 15.43.52.jpeg';
import photo4 from '../photos/photo_2026-03-08 15.43.53.jpeg';
import photo5 from '../photos/photo_2026-03-08 15.43.54.jpeg';

const toys = [
  {
    title: 'Снегурочка из ваты',
    image: photo1,
    description: 'Ручная работа в винтажной стилистике.'
  },
  {
    title: 'Дед Мороз на елку',
    image: photo2,
    description: 'Классическая новогодняя игрушка из ваты.'
  },
  {
    title: 'Елочный ангел',
    image: photo3,
    description: 'Нежный декор для елки и подарочных наборов.'
  },
  {
    title: 'Зайчик в шубке',
    image: photo4,
    description: 'Ватная фигурка в ретро-новогоднем стиле.'
  },
  {
    title: 'Праздничный набор',
    image: photo5,
    description: 'Комплект игрушек в единой цветовой гамме.'
  }
];

const links = [
  {
    label: 'Ozon',
    url: 'https://ozon.ru/t/X4ko70G'
  },
  {
    label: 'Яндекс Маркет',
    url: 'https://market.yandex.ru/business--rukodelie-s-dushoi/193320896?generalContext=t%3DshopInShop%3Bi%3D1%3Bbi%3D193320896%3B&rs=eJwzEvjEyMvBKLDwEKsEg8aqey2sACqyBRU%2C&searchContext=sins_ctx'
  },
  {
    label: 'Telegram канал',
    url: 'https://t.me/rukodelie_s_dushoy'
  },
  {
    label: 'Мой Telegram',
    url: 'https://t.me/LarisaYrievna'
  }
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const maxStartSlide = Math.max(0, toys.length - 2);

  const prevSlide = () => {
    setActiveSlide((current) => (current === 0 ? maxStartSlide : current - 1));
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current >= maxStartSlide ? 0 : current + 1));
  };

  return (
    <div className="page">
      <header className="hero">
        <p className="hero-tag">Ватные новогодние игрушки</p>
        <h1>Рукоделие с Душой</h1>
        <p>
          Делаю елочные игрушки из ваты на заказ: ручная лепка, аккуратная
          роспись и бережная упаковка для подарка или вашей коллекции.
        </p>
      </header>

      <main>
        <section className="order-bar" aria-label="Заказ игрушек">
          <strong>Любую игрушку можно заказать напрямую со скидкой</strong>
          <span>Доставка через Яндекс или СДЭК по вашему адресу</span>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Фото-примеры игрушек</h2>
          </div>

          <div className="toy-slider" aria-label="Примеры ватных игрушек">
            <button
              type="button"
              className="slider-arrow left"
              onClick={prevSlide}
              aria-label="Предыдущая фотография"
            >
              ←
            </button>

            <div className="toy-carousel-window">
              <div
                className="toy-carousel-track"
                style={{ transform: `translateX(-${activeSlide * 50}%)` }}
              >
                {toys.map((toy) => (
                  <article key={toy.title} className="toy-slide">
                    <img src={toy.image} alt={toy.title} loading="lazy" />
                    <div className="toy-card-body">
                      <h3>{toy.title}</h3>
                      <p>{toy.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="slider-arrow right"
              onClick={nextSlide}
              aria-label="Следующая фотография"
            >
              →
            </button>
          </div>
        </section>

        <section className="section trust">
          <div className="section-head">
            <h2>Все игрушки сделаны ручной работой</h2>
            <p>Каждая фигурка создается вручную, без фабричного производства.</p>
          </div>

          <div className="trust-grid">
            <article className="trust-card">
              <strong>500+</strong>
              <span>заказов выполнено</span>
            </article>
            <article className="trust-card">
              <strong>200+</strong>
              <span>отзывов от покупателей</span>
            </article>
            <article className="trust-card">
              <strong>5 звезд</strong>
              <span>средняя оценка всех отзывов</span>
            </article>
          </div>
        </section>

        <section className="section contacts">
          <div className="section-head">
            <h2>Где заказать</h2>
            <p>Выберите удобную площадку</p>
          </div>

          <div className="links-grid">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="shop-link"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
