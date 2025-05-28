import React from 'react';
import './HeaderMain.css';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

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
            <a className="action-button" href="#"><BurgerMenu /><br /><a className="action-button-text-m" style={{ textDecoration: "none", color: "#5F5F5F" }} href="#">Меню</a></a>
            <Link to='/' className="logo-action-button" style={{ textDecoration: "none", color: "#5F5F5F" }}><img src="./Union.png" /></Link>
            <Link to='/product' className="action-button" style={{ textDecoration: "none", color: "#5F5F5F" }}>Товари </Link>
            <Link to='/roompage' className="action-button" style={{ textDecoration: "none", color: "#5F5F5F" }}>Кімнати </Link>
            <Link to='/design' className="action-button" style={{ textDecoration: "none", color: "#5F5F5F" }}>Дизайн</Link>
          </div>

          <div className="header-right">
            <a className="action-button" href="#">
              <img src="./uil_user.png" /> 
            </a>
            <a className="action-button-text" href="#">
              Київ
            </a>
            

            <a className="action-button" href="#">
            <Link to='/login' style={{ textDecoration: "none", color: "#5F5F5F" }}><img src="./uil_user_profile.png" /></Link>
            </a>
            <a className="action-button-text" href="#">
            <Link to='/login' style={{ textDecoration: "none", color: "#5F5F5F" }}>Увійдіть В Систему </Link>
            </a>

            



            <a className="action-button" href="#">
              <Link to='/backetpage' style={{ textDecoration: "none", color: "#5F5F5F" }}><img src="./basket_for_shopping.png" /></Link>
              <Link to='/wishlist' style={{ textDecoration: "none", color: "#5F5F5F" }}><img src="./like.png" /></Link>
            </a>
          </div>
        </nav>
      </div>

      <header>
        <div className="search-bar">
          <img src="./Group.png" className="search-icon" />
          <input type="text" placeholder="Пошук" />
        </div>
      </header>
    </div>
  );
};

export default HeaderMain;