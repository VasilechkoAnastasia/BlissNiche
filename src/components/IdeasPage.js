import React from 'react';
import './IdeasPage.css';
import SliderMain from './SliderMain.js';
import HeaderMain from './HeaderMain.js';
import FooterMain from './FooterMain.js';

export function IdeasPage() {
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
                    <section className="first-ideas-section">
                        <p className="title-section-main">Ідеї для оформлення</p>
                        <p>Для вашого комфорту наш магазин меблів пропонує не лише широкий асортимент стильних і якісних виробів, але й додаткові <br></br>
                            послуги, які зроблять ваш вибір ще приємнішим. Ви можете замовити меблі з індивідуальним дизайном, обравши кольори, матеріали <br></br>
                            та розміри, що ідеально пасуватимуть до вашого інтер’єру. Ми дбаємо про довкілля, тому використовуємо екологічно чисті <br></br>
                            сертифіковані матеріали, зокрема перероблену деревину. Наші дизайнери інтер’єру готові надати безкоштовну консультацію, щоб <br></br>
                            допомогти вам створити затишний і функціональний простір. Ми пропонуємо гнучку доставку по всій Україні з можливістю вибору <br></br>
                            зручного часу, а також послуги професійної збірки меблів на місці, щоб ви могли насолоджуватися покупкою без зайвих турбот.</p>
                    </section>




                    <section className="second-ideas-section">
                        <p className="title-section-main">Ідеї</p>

                        <div className="info-card">
                            <div className="info-card-image">
                                <img src="second-ideas1.png" />
                            </div>
                            <div className="info-card-text">
                                <h3 className="info-card-title">ІНФОРМАЦІЯ</h3>
                                <p className="info-card-description">
                                    У нашому меблевому магазині деякі продукти можна стилізувати за кольором і матеріалом під ваші особисті вподобання, створюючи унікальний дизайн для вашого дому. Звертайтесь до наших консультантів щоб дізнатися деталі!
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-card-image">
                                <img src="second-ideas2.png" />
                            </div>
                            <div className="info-card-text">
                                <h3 className="info-card-title">ІНФОРМАЦІЯ</h3>
                                <p className="info-card-description">
                                    У нашому меблевому магазині деякі продукти можна стилізувати за кольором і матеріалом під ваші особисті вподобання, створюючи унікальний дизайн для вашого дому. Звертайтесь до наших консультантів щоб дізнатися деталі!
                                </p>
                            </div>
                        </div>
                    </section>




                    <section className="third-ideas-section">
                        <p className="title-section-main">Ідеї для оформлення</p>
                        <SliderMain images={sliderImages1} />

                    </section>





                    <section className="four-ideas-section">
                        <p className="title-section-main">Ідеї</p>
                        <div className="cards-container-ideas">
                            <div className="card-ideas">
                                <img src="four-ideas1.png" />
                                <div className="title-section-main">НАША НОВА КОЛЕКЦІЯ</div>
                            </div>
                            <div className="card-ideas">
                                <img src="four-ideas2.png" />
                                <div className="title-section-main">НАША НОВА КОЛЕКЦІЯ</div>
                            </div>
                            <div className="card-ideas">
                                <img src="four-ideas3.png" />
                                <div className="title-section-main">НАША НОВА КОЛЕКЦІЯ</div>
                            </div>
                        </div>
                    </section>







                    <section className="five-ideas-section">
                        <p className="title-section-main">Ідеї</p>
                        <div className="masonry-grid-ideas">
                            <div className="image-grid-ideas">
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas1.png" />
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas4.png" />
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas7.png" />
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas10.png" />
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas2.png"/>
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas5.png" />
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas8.png"/>
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas11.png"/>
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas13.png"/>
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas3.png"/>
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas6.png"/>
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas9.png"/>
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                                <div className="image-wrapper-ideas">
                                    <img src="five-ideas12.png"/>
                                    <img src="strelka.png" className="corner-icon" style={{ width: '40px' }} />
                                </div>
                            </div>
                        </div>

                    </section>



                    <section className="six-ideas-section">
                        <p className="title-section-main">Ідеї для оформлення</p>
                        <SliderMain images={sliderImages1} />

                    </section>

                </main>


            </div>


            <FooterMain />
        </div>
    );
};
export default IdeasPage;

