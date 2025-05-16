import React from 'react';
import './HeaderMain.css'; 

export function HeaderMain() {
  return (
    <div className="app">
      <div className="strip">
        <div className="scroll">
          <p className="text">
            #вседлядому #швидкотазручно #buy_now #вседлядому #швидкотазручно #buy_now #вседлядому #швидкотазручно #buy_now
          </p>
        </div>
      </div>

      <div className="user-actions">
        <nav>
          <div className="header-left">
            <a className="action-button" href="#">☰<br />Меню</a>
            <img src="./Union.png" alt="Logo" />
            <a className="action-button" href="#">Товари</a>
            <a className="action-button" href="#">Книги</a>
            <a className="action-button" href="#">Дизайн</a>
          </div>

          <div className="header-right">
            <a className="action-button" href="#">
              <img src="./uil_user.png" alt="Location" /> Київ
            </a>
            <a className="action-button" href="#">
              <img src="./uil_user_profile.png" alt="Profile" /> Привіт! Увійдіть В Систему
            </a>
            <a className="action-button" href="#">
              <img src="./basket_for_shopping.png" alt="Cart" />
              <img src="./like.png" alt="Wishlist" />
            </a>
          </div>
        </nav>
      </div>

      <header>
        <div className="search-bar">
          <img src="./Group.png" className="search-icon" alt="Search" />
          <input type="text" placeholder="Пошук" />
        </div>
      </header>
    </div>
  );
};

export default HeaderMain;