import React from 'react';
import './BacketPage.css';
import HeaderMain from './HeaderMain.js';
import FooterMain from './FooterMain.js';

export function BacketPage() {

    return (
        <div className="app">
            <HeaderMain />


            <div className="wrap">
                <main>
                    <section className="first-backet-section">
                        <p className="title-section-main">ВАША КОРЗИНА ПУСТА...</p>
                    </section>


                    <section className="second-backet-section">
                        <img src="second-backet-sadsticker.png" className="sadsticker-icon"/>
                    </section>
                </main>
            </div>


            <FooterMain />
        </div>
    );
};
export default BacketPage;

