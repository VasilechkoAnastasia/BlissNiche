import React from 'react';
import './WishlistPage.css';
import HeaderMain from './HeaderMain.js';
import FooterMain from './FooterMain.js';

export function WishlistPage() {

    return (
        <div className="app">
            <HeaderMain />


            <div className="wrap">
                <main>
                    <section className="first-wishlist-section">
                        <p className="title-section-main">ВАШ ЛИСТ БАЖАНЬ ПУСТИЙ...</p>
                    </section>


                    <section className="second-wishlist-section">
                        <img src="second-backet-sadsticker.png" className="sadsticker-icon"/>
                    </section>
                </main>
            </div>


            <FooterMain />
        </div>
    );
};
export default WishlistPage;