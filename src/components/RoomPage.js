import React from 'react';
import './RoomPage.css';
import SliderMain from './SliderMain.js';
import HeaderMain from './HeaderMain.js';
import CatalogMain from './CatalogMain.js';
import FooterMain from './FooterMain.js';
import LineMain from './LineMain.js';

export function RoomPage() {
    const sliderImagesRoom1 = [
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
                    <section className="first-room-section">
                        <p className="title-section-main">Кімнати</p>
                        <SliderMain images={sliderImagesRoom1} />
                        <div className="room-gallery-room">
                            <div className="room-gallery-item-room">
                                <img src="one-room1.png" alt="Комната 1" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room2.png" alt="Комната 2" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room3.png" alt="Комната 3" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room4.png" alt="Комната 4" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room5.png" alt="Комната 5" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room6.png" alt="Комната 6" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room7.png" alt="Комната 7" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                        </div>
                    </section>




                    <section className="second-room-section">
                        <p className="title-section-main">Товари</p>

                    </section>




                    <section className="third-room-section">
                        <p className="title-section-main">Інформація</p>
                        <div className="info-card">
                            <div className="info-card-image">
                                <img src="third-room1.png" />
                            </div>
                            <div className="info-card-text">
                                <h3 className="info-card-title">ІНФОРМАЦІЯ</h3>
                                <p className="info-card-description">
                                    У нашому меблевому магазині деякі продукти можна стилізувати за кольором і матеріалом під ваші особисті вподобання, створюючи унікальний дизайн для вашого дому. Звертайтесь до наших консультантів щоб дізнатися деталі!
                                </p>
                            </div>
                        </div>
                        <div className="room-gallery-room">
                            <div className="room-gallery-item-room">
                                <img src="one-room1.png" alt="Комната 1" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room2.png" alt="Комната 2" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room3.png" alt="Комната 3" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room4.png" alt="Комната 4" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room5.png" alt="Комната 5" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room6.png" alt="Комната 6" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                            <div className="room-gallery-item-room">
                                <img src="one-room7.png" alt="Комната 7" className="room-gallery-image-room" />
                                <p className="room-gallery-caption-room">Назва роздiлу</p>
                            </div>
                        </div>

                    </section>




                    <section className="four-room-section">

                    </section>



                    <section className="five-room-section">
                        <CatalogMain />
                    </section>


                    <section className="six-room-section">
                        <p className="title-section-main">Ідеї для оформлення</p>
                        <div className="gallery-grid">
                            <img src="six-room1.png" className="four-sections-photo1" />
                            <img src="six-room2.png" className="four-sections-photo2" />
                            <img src="six-room3.png" className="four-sections-photo3" />
                            <img src="six-room4.png" className="four-sections-photo4" />
                        </div>
                    </section>

                    <section className="seven-room-recomendation">
                    <p className="title-section-main">Ідеї для оформлення</p>
                        <div className="gallery-grid">
                            <img src="seven-room1.png" className="four-sections-photo1" />
                            <img src="seven-room2.png" className="four-sections-photo2" />
                            <img src="seven-room3.png" className="four-sections-photo3" />
                            <img src="seven-room4.png" className="four-sections-photo4" />
                        </div>

                    </section>


                    <section className="eight-room-section">
                    <p className="title-section-main">Затишні набори</p>
                    </section>

                    <section className="nine-room-section">
                    <p className="title-section-main">Додатково</p>
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
export default RoomPage;

