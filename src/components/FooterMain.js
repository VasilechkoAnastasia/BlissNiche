import React from 'react';
import './FooterMain.css'; 

export function FooterMain() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-column">
            <h3 className="footer-column-title highlighted">Головна</h3>
            <ul className="footer-column-list">
              <li><a href="#link1">Все для дому</a></li>
              <li><a href="#link2">Знайди те, шо шукаєш!</a></li>
              <li><a href="#link3">Рекомендації</a></li>
              <li><a href="#link4">Найкращі набори</a></li>
              <li><a href="#link5">Новинки</a></li>
              <li><a href="#link6">Каталог</a></li>
              <li><a href="#link7">Ідеї для оформлення</a></li>
              <li><a href="#link8">Додаткові рекомендації</a></li>
              <li><a href="#link9">Важлива інформація</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Дизайн</h3>
            <ul className="footer-column-list">
              <li><a href="#link1">Створи дизайн своєї мрії</a></li>
              <li><a href="#link2">Варіанти оформлення</a></li>
              <li><a href="#link3">Поради</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Кімнати</h3>
            <ul className="footer-column-list">
              <li><a href="#link1">Кімнати</a></li>
              <li><a href="#link2">Товари</a></li>
              <li><a href="#link3">Інформація</a></li>
              <li><a href="#link4">Каталог</a></li>
              <li><a href="#link5">Ідеї для оформлення</a></li>
              <li><a href="#link6">Ідеї для оформлення</a></li>
              <li><a href="#link7">Затишні набори</a></li>
              <li><a href="#link8">Додатково</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Заголовок підрозділу</h3>
            <ul className="footer-column-list">
              <li><a href="#link1">Зміст підтеми</a></li>
              <li><a href="#link2">Зміст підтеми</a></li>
              <li><a href="#link3">Зміст підтеми</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Заголовок підрозділу</h3>
            <ul className="footer-column-list">
              <li><a href="#link1">Зміст підтеми</a></li>
              <li><a href="#link2">Зміст підтеми</a></li>
              <li><a href="#link3">Зміст підтеми</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-icons">
              <a href="#social1"><img src="instagram-icon.png" alt="Instagram" /></a>
              <a href="#social2"><img src="twitter-icon.png" alt="Twitter" /></a>
              <a href="#social3"><img src="telegram-icon.png" alt="Telegram" /></a>
              <img src="visa-icon.png" alt="Visa" />
              <img src="mastercard-icon.png" alt="Mastercard" />
              <img src="maestro-icon.png" alt="Maestro" />
              <img src="paypal-icon.png" alt="Paypal" />
              <img src="applepay-icon.png" alt="Apple Pay" />
            </div>
          </div>

          <div className="footer-bottom-right">
            <ul className="footer-bottom-links">
              <li><a href="#link1">Товари</a></li>
              <li><a href="#link2">Книги</a></li>
              <li><a href="#link3">Дизайн</a></li>
              <li><a href="#link4">Місто</a></li>
              <li><a href="#link5">Вхід</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-button">
        <a href="#top">
          <img src="button for slider.png" alt="Scroll to top" />
        </a>
      </div>
    </footer>
  );
};

export default FooterMain;