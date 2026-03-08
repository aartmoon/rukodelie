import { useState } from 'react';
import photo1 from '../photos/photo_2026-03-08 15.43.50.jpeg';
import photo2 from '../photos/photo_2026-03-08 15.43.51.jpeg';
import photo3 from '../photos/photo_2026-03-08 15.43.52.jpeg';
import photo4 from '../photos/photo_2026-03-08 15.43.53.jpeg';
import photo5 from '../photos/photo_2026-03-08 15.43.54.jpeg';

const toys = [
  {
    title: 'Снегурочка из ваты',
    image: photo1
  },
  {
    title: 'Дед Мороз на елку',
    image: photo2
  },
  {
    title: 'Елочный ангел',
    image: photo3
  },
  {
    title: 'Зайчик в шубке',
    image: photo4
  },
  {
    title: 'Праздничный набор',
    image: photo5
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
  const [slideDirection, setSlideDirection] = useState(null);

  const visibleToys = [
    toys[(activeSlide - 1 + toys.length) % toys.length],
    toys[activeSlide],
    toys[(activeSlide + 1) % toys.length],
    toys[(activeSlide + 2) % toys.length]
  ];

  const prevSlide = () => {
    if (slideDirection) {
      return;
    }
    setSlideDirection('prev');
  };

  const nextSlide = () => {
    if (slideDirection) {
      return;
    }
    setSlideDirection('next');
  };

  const handleTransitionEnd = () => {
    if (slideDirection === 'next') {
      setActiveSlide((current) => (current + 1) % toys.length);
    }

    if (slideDirection === 'prev') {
      setActiveSlide((current) => (current === 0 ? toys.length - 1 : current - 1));
    }

    setSlideDirection(null);
  };

  const trackTransform =
    slideDirection === 'next' ? 'translateX(-100%)' : slideDirection === 'prev' ? 'translateX(0%)' : 'translateX(-50%)';

  return (
    <div className="page">
      <header className="hero">
        <p className="hero-tag">Ватные новогодние игрушки</p>
        <h1>Рукоделие с Душой</h1>
        <p>
          Не Китай и не конвейер. Каждую игрушку я изготавливаю вручную.
        </p>
      </header>

      <main>
        <section className="order-bar" aria-label="Заказ игрушек">
          <strong>Любую игрушку можно заказать напрямую со скидкой</strong>
          <span>Отправка из Москвы через Яндекс или СДЭК</span>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Примеры игрушек</h2>
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
                className={`toy-carousel-track${slideDirection ? ' is-animating' : ''}`}
                style={{ transform: trackTransform }}
                onTransitionEnd={handleTransitionEnd}
              >
                {visibleToys.map((toy, index) => (
                  <article key={`${toy.title}-${index}`} className="toy-slide">
                    <img src={toy.image} alt={toy.title} loading="lazy" />
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

        <section className="section">
          <div className="section-head">
            <h2>Почему эти игрушки особенные</h2>
            <p>
              Ручная работа по старинной технологии, каждая игрушка в единственном экземпляре.
            </p>
          </div>

          <div className="about-copy">
            <p>Подойдет и для елки, и для уютного новогоднего интерьера.</p>
            <p>Используются хлопковая вата, проволока, клейстер, акриловые краски и лак.</p>
            <p>Каждая игрушка упаковывается в надежную коробку и подходит для подарка.</p>
            <p>Все игрушки в наличии и отправляются без задержек.</p>
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
            <p>Выберите удобную площадку для заказа</p>
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
