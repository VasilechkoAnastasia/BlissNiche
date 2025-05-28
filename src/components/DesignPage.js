import React from 'react';
import './DesignPage.css';
import SliderMain from './SliderMain.js';
import HeaderMain from './HeaderMain.js';
import FooterMain from './FooterMain.js';
import { Link } from 'react-router-dom';

export function DesignPage() {

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
            <div className="background-img-design">
                <div className="background-img-design2">

                    <HeaderMain />

                    <div className="wrap">
                        <main>
                            <section className="first-design-section">
                                <h1 className="main-maintext">СТВОРИ ДИЗАЙН<br></br>СВОЄЇ МРІЇ</h1>


                                <div className="info-cards-container-design">
                                    <div className="info-card-item-design">
                                        <div className="icon-wrapper-design">
                                            <img src="/path-to-icon1.png" className="card-icon-design" />
                                        </div>
                                        <h3>СТВОРИ ДИЗАЙН</h3>
                                        <p>habitasse consequat egestas lectus blandit</p>
                                    </div>
                                    <div className="info-card-item-design">
                                        <div className="icon-wrapper-design">
                                            <img src="/path-to-icon2.png" className="card-icon-design" />
                                        </div>
                                        <h3>КОМНАТИ</h3>
                                        <p>habitasse consequat egestas lectus blandit</p>
                                    </div>
                                    <div className="info-card-item-design">
                                        <div className="icon-wrapper-design">
                                            <img src="/path-to-icon3.png" className="card-icon-design" />
                                        </div>
                                        <h3>РЕЗУЛЬТАТ</h3>
                                        <p>habitasse consequat egestas lectus blandit</p>
                                    </div>

                                </div>
                            </section>

                            <section className='new-first-design-text'>
                                <div className='first-design-text'>
                                    <p className="title-section-main">ВТІЛЮЙ СВОЇ ІДЕЇ</p>
                                    <p >Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus<br></br>
                                        blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. <br></br>
                                        Elementum consequat risus nullam</p>
                                </div>
                            </section>




                            <section className="second-design-section">
                                <div className="cards-container-design">
                                    <div className="card-design">
                                        <img src="second-design2.png" />
                                        <div className="title-section-main">ЯК ОБРАТИ СТИЛЬ</div>
                                    </div>
                                    <div className="card-design">
                                        <img src="second-design3.png" />
                                        <div className="title-section-main">НАШІ ПОРАДИ</div>
                                    </div>
                                    <div className="card-design">
                                        <img src="second-design4.png" />
                                        <div className="title-section-main">ЯК СПЛАНУВАТИ</div>
                                    </div>
                                </div>


                                <div className="info-card">
                                    <div className="info-card-image">
                                        <img src="second-design1.png" />
                                    </div>
                                    <div className="info-card-text">
                                        <h3 className="info-card-title">ІНФОРМАЦІЯ</h3>
                                        <p className="info-card-description">
                                            У нашому меблевому магазині деякі продукти можна стилізувати за кольором і матеріалом під ваші особисті вподобання, створюючи унікальний дизайн для вашого дому. Звертайтесь до наших консультантів щоб дізнатися деталі!
                                        </p>
                                    </div>
                                </div>
                            </section>






                            <section className="third-design-section">
                                <p className="title-section-main">ВАРІАНТИ ОФОРМЛЕННЯ</p>
                                <SliderMain images={sliderImages1} />
                            </section>




                            <section className="four-design-section">
                                <p className="title-section-main">ПОРАДИ</p>
                                <div className="info-card">
                                    <div className="info-card-image">
                                        <img src="four-design1.png" />
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
                                        <img src="four-design2.png" />
                                    </div>
                                    <div className="info-card-text">
                                        <h3 className="info-card-title">ІНФОРМАЦІЯ</h3>
                                        <p className="info-card-description">
                                            У нашому меблевому магазині деякі продукти можна стилізувати за кольором і матеріалом під ваші особисті вподобання, створюючи унікальний дизайн для вашого дому. Звертайтесь до наших консультантів щоб дізнатися деталі!
                                        </p>
                                    </div>
                                </div>
                            </section>


                        </main>


                    </div>
                </div>


                <FooterMain />
            </div>
        </div>
    );
};
export default DesignPage;

