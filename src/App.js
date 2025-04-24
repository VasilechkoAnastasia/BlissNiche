import React from 'react';
import './App.css';
import SliderMain from './components/SliderMain.js';

const App = () => {
  const products = [{ id: 1, title: 'ПОДУШКИ', subtitle: 'спальня кімната вітальня', price: '12$', tag: 'TOP', image: 'Rectangle\ 28.png' },
  { id: 2, title: 'КОВДРА', subtitle: 'спальня кімната вітальня', price: '30$', tag: 'TOP', image: 'Rectangle\ 27.png' },
  { id: 3, title: 'ЛІЖКО', subtitle: 'спальня кімната вітальня', price: '30$', tag: 'TOP', image: 'Rectangle\ 26.png' }];

  return (
    <div className="app">
      <div className="strip">
        <p className="text">#buy now #вседлядому #швидкотазручно #buy now #вседлядому #швидкотазручно #buy now #вседлядому #швидкотазручно #buy now #вседлядому #швидкотазручно</p>
      </div>

      <div className="user-actions">
        <nav>
          <div className="header-left">
            <a className="action-button" href="#">☰<br></br>Меню</a>
            <img src="./Union.png" />
            <a className="action-button" href="#"> Товари</a>
            <a className="action-button" href="#"> Книги</a>
            <a className="action-button" href="#"> Дизайн</a>
          </div>

          <div className="header-right">
            <a className="action-button" href="#"><img src="./uil_user.png" /> Київ</a>
            <a className="action-button" href="#"><img src="./uil_user_profile.png" /> Привіт! Увійдіть В Систему</a>
            <a className="action-button" href="#"><img src="./basket_for_shopping.png" /><img src="./like.png" /></a>
          </div>
        </nav>
      </div>

      <div className="wrap">
        <header>
          <div className="search-bar">
            <img src="./Group.png" className="search-icon" />
            <input type="text" placeholder="Пошук" />
          </div>
        </header>
        <main>
          <section className="first-main-section">
            <div className="content">
              <div className="left-content">
                <h1>ВСЕ ДЛЯ ДОМУ</h1>
                <div className="cta-buttons">
                  <button className="cta-primary">СТВОРИТИ АКАУНТ ТА ПОЧАТИ!</button>
                  <button className="cta-secondary">
                    КАТАЛОГ &#9662;
                  </button>
                </div>


                <div className="product-cards">
                  {products.map((product) => (
                    <div key={product.id} className="product-card">
                      <div className="product-image">
                        <img src={product.image} alt={product.title} />
                        <span className="product-tag">{product.tag}</span>
                      </div>
                      <div className="product-info">
                        <h3>{product.title}</h3>
                        <p>{product.subtitle}</p>
                        <span className="product-price">{product.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="promo-text">
                  ЛОВИ МОМЕНТ! Знижки до <strong>60%</strong> на вибрані категорії товарів!
                </p>
              </div>
            </div>
          </section>

          <section className="second-main-section">
            <h1>ЗНАЙДИ ТЕ,ШО ШУКАЄШ!</h1>
            <div>
            <SliderMain />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default App;

