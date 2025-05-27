import React from 'react';
import './ProductPage.css';
import SliderMain from './SliderMain.js';
import HeaderMain from './HeaderMain.js';
import FooterMain from './FooterMain.js';

export function ProductPage() {
    const sliderImages1 = [
        "/slider1.png",
        "/slider2.png",
        "/slider3.png",
        "/slider4.png",
        "/slider5.png",
        "/slider6.png",
        "/slider7.jpg",
        "/slider8.jpg",
        "/slider9.jpg",
        "/slider10.jpg",
    ];


    return (
        <div className="app">
            <HeaderMain />


            <div className="wrap">
                <main>
                    <section className="first-product-section">
                        <p className="title-section-main">Товари</p>
                        <SliderMain images={sliderImages1} />
                    </section>




                    <section className="second-product-section">
                        <p className="title-section-main">Товари з одного набору</p>
                        <p>Для вашого комфорту наш магазин меблів пропонує не лише широкий асортимент стильних і якісних виробів, але й додаткові <br></br>
                            послуги, які зроблять ваш вибір ще приємнішим. Ви можете замовити меблі з індивідуальним дизайном, обравши кольори, матеріали <br></br>
                            та розміри, що ідеально пасуватимуть до вашого інтер’єру. Ми дбаємо про довкілля, тому використовуємо екологічно чисті.</p>
                        <div className="gallery-grid-product">
                            <img src="second-product-photo1.png" className="second-product-photo1" />
                            <img src="second-product-photo2.png" className="second-product-photo2" />
                            <img src="second-product-photo3.png" className="second-product-photo3" />
                            <img src="second-product-photo4.png" className="second-product-photo4" />
                        </div>

                    </section>




                    <section className="third-product-section">
                        <p className="title-section-main">Новинки</p>
                        <div className="cards-container-third-products">
                            <div className="card-third-products">
                                <img src="third-product1.png" className="third-product-photo" />
                                <p>Lorem ipsum dolor sit amet consectetur, gravida convallis id orci egestas non. Rhoncus vitae quis sem.</p>
                            </div>
                            <div className="card-third-products">
                                <img src="third-product2.png" className="third-product-photo" />
                                <p>Lorem ipsum dolor sit amet consectetur, gravida convallis id orci egestas non. Rhoncus vitae quis sem.</p>
                            </div>
                            <div className="card-third-products">
                                <img src="third-product3.png" className="third-product-photo" />
                                <p>Lorem ipsum dolor sit amet consectetur, gravida convallis id orci egestas non. Rhoncus vitae quis sem.</p>
                            </div>
                        </div>
                    </section>





                    <section className="four-product-section">
                        <p className="title-section-main">Затишні набори</p>
                        <div className="cards-container-four-products">
                            <div className="card-four-products">
                                <img src="four-product1.png" className="four-product-photo" />
                                <p>Lorem ipsum dolor sit amet consectetur, gravida convallis id orci egestas non. Rhoncus vitae quis sem.</p>
                            </div>
                            <div className="card-four-products">
                                <img src="four-product2.png" className="four-product-photo" />
                                <p>Lorem ipsum dolor sit amet consectetur, gravida convallis id orci egestas non. Rhoncus vitae quis sem.</p>
                            </div>
                            <div className="card-four-products">
                                <img src="four-product3.png" className="four-product-photo" />
                                <p>Lorem ipsum dolor sit amet consectetur, gravida convallis id orci egestas non. Rhoncus vitae quis sem.</p>
                            </div>
                        </div>
                    </section>







                    <section className="five-product-section">
                        <p className="title-section-main">Товари з одного набору</p>
                        <p>Для вашого комфорту наш магазин меблів пропонує не лише широкий асортимент стильних і якісних виробів, але й додаткові <br></br>
                            послуги, які зроблять ваш вибір ще приємнішим. Ви можете замовити меблі з індивідуальним дизайном, обравши кольори, матеріали <br></br>
                            та розміри, що ідеально пасуватимуть до вашого інтер’єру. Ми дбаємо про довкілля, тому використовуємо екологічно чисті.</p>
                        <div className="gallery-grid-product">
                            <img src="five-product-photo1.png" className="five-product-photo1" />
                            <img src="five-product-photo2.png" className="five-product-photo2" />
                            <img src="five-product-photo3.png" className="five-product-photo3" />
                            <img src="five-product-photo4.png" className="five-product-photo4" />
                        </div>



                        <div className="cards-container-product">
                            <div className="card-product">
                                <div className="card-icon-product"><img src="five-icon-product1.png"></img></div>
                                <h5>ДОСТАВКА</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, egestas viverra tempus molestie non.</p>
                            </div>
                            <div className="card-product">
                                <div className="card-icon-product"><img src="five-icon-product2.png"></img></div>
                                <h5>ОПЛАТА</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, egestas viverra tempus molestie non.</p>
                            </div>
                            <div className="card-product">
                                <div className="card-icon-product"><img src="five-icon-product3.png"></img></div>
                                <h5>ОРГАНІЗАЦІЯ</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, egestas viverra tempus molestie non.</p>
                            </div>
                            <div className="card-product">
                                <div className="card-icon-product"><img src="five-icon-product4.png"></img></div>
                                <h5>ПЛАНУВАННЯ</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, egestas viverra tempus molestie non.</p>
                            </div>
                        </div>
                    </section>



                    <section className="six-product-section">
                        <p className="title-section-main">Ідеї для оформлення</p>
                        <p>Для вашого комфорту наш магазин меблів пропонує не лише широкий асортимент стильних і якісних виробів, але й додаткові <br></br>
                            послуги, які зроблять ваш вибір ще приємнішим. Ви можете замовити меблі з індивідуальним дизайном, обравши кольори, матеріали <br></br>
                            та розміри, що ідеально пасуватимуть до вашого інтер’єру. Ми дбаємо про довкілля, тому використовуємо екологічно чисті <br></br>
                            сертифіковані матеріали, зокрема перероблену деревину. Наші дизайнери інтер’єру готові надати безкоштовну консультацію, щоб <br></br>
                            допомогти вам створити затишний і функціональний простір. Ми пропонуємо гнучку доставку по всій Україні з можливістю вибору <br></br>
                            зручного часу, а також послуги професійної збірки меблів на місці, щоб ви могли насолоджуватися покупкою без зайвих турбот.</p>
                    </section>



                    <section className="seven-product-section">
                        <p className="title-section-main">Ідеї для оформлення</p>
                        <p>Для вашого комфорту наш магазин меблів пропонує не лише широкий асортимент стильних і якісних виробів, але й додаткові <br></br>
                            послуги, які зроблять ваш вибір ще приємнішим. Ви можете замовити меблі з індивідуальним дизайном, обравши кольори, матеріали <br></br>
                            та розміри, що ідеально пасуватимуть до вашого інтер’єру. Ми дбаємо про довкілля, тому використовуємо екологічно чисті <br></br>
                            сертифіковані матеріали, зокрема перероблену деревину. Наші дизайнери інтер’єру готові надати безкоштовну консультацію, щоб <br></br>
                            допомогти вам створити затишний і функціональний простір. Ми пропонуємо гнучку доставку по всій Україні з можливістю вибору <br></br>
                            зручного часу, а також послуги професійної збірки меблів на місці, щоб ви могли насолоджуватися покупкою без зайвих турбот.</p>
                    </section>






                    <section className="eight-product-section">
                        <p className="title-section-main">Ідеї для оформлення</p>
                        <p>Для вашого комфорту наш магазин меблів пропонує не лише широкий асортимент стильних і якісних виробів, але й додаткові <br></br>
                            послуги, які зроблять ваш вибір ще приємнішим. Ви можете замовити меблі з індивідуальним дизайном, обравши кольори, матеріали <br></br>
                            та розміри, що ідеально пасуватимуть до вашого інтер’єру. Ми дбаємо про довкілля, тому використовуємо екологічно чисті <br></br>
                            сертифіковані матеріали, зокрема перероблену деревину. Наші дизайнери інтер’єру готові надати безкоштовну консультацію, щоб <br></br>
                            допомогти вам створити затишний і функціональний простір. Ми пропонуємо гнучку доставку по всій Україні з можливістю вибору <br></br>
                            зручного часу, а також послуги професійної збірки меблів на місці, щоб ви могли насолоджуватися покупкою без зайвих турбот.</p>
                    </section>





                </main>


            </div>


            <FooterMain />
        </div>
    );
};
export default ProductPage;

