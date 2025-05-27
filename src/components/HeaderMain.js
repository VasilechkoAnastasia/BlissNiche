import React from 'react';
import './HeaderMain.css';
import { Link } from 'react-router-dom';

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
            <img src="./Union.png" />
            <a className="action-button" href="#"><Link to='/product' style={{ textDecoration: "none", color: "#5F5F5F" }}>Товари </Link></a>
            <a className="action-button" href="#"><Link to='/roompage' style={{ textDecoration: "none", color: "#5F5F5F" }}>Кімнати </Link></a>
            <a className="action-button" href="#"><Link to='/design' style={{ textDecoration: "none", color: "#5F5F5F" }}>Дизайн</Link></a>
          </div>

          <div className="header-right">
            <a className="action-button" href="#">
              <img src="./uil_user.png" /> Київ
            </a>
            {/* <a className="action-button" href="#">
              <img src="./uil_user_profile.png" /> Увійдіть В Систему   
            </a> */}

            <a className="action-button" href="#">
              <img src="./uil_user_profile.png" /> <Link to='/login' style={{ textDecoration: "none", color: "#5F5F5F" }}>Увійдіть В Систему </Link> 
            </a>



            <a className="action-button" href="#">
              <img src="./basket_for_shopping.png" />
              <img src="./like.png" />
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