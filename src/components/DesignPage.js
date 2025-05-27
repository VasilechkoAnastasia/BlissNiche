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
        <HeaderMain />

        <div className="wrap">
          <main>
            <section className="first-design-section">
              
            </section>




            <section className="second-design-section">
              

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


        <FooterMain />
      </div>
    </div>
  );
};
export default DesignPage;

