import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage  from './components/MainPage';
import RoomPage from './components/RoomPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/roompage" element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import SliderMain from './components/SliderMain.js';
// import HeaderMain from './components/HeaderMain.js';
// import CatalogMain from './components/CatalogMain.js';
// import FooterMain from './components/FooterMain.js';
// import LineMain from './components/LineMain.js';

// const App = () => {
//   const products = [{ id: 1, title: 'ПОДУШКИ', subtitle: 'спальня кімната вітальня', price: '12$', tag: 'TOP', image: 'Rectangle\ 28.png' },
//   { id: 2, title: 'КОВДРА', subtitle: 'спальня кімната вітальня', price: '30$', tag: 'TOP', image: 'Rectangle\ 27.png' },
//   { id: 3, title: 'ЛІЖКО', subtitle: 'спальня кімната вітальня', price: '30$', tag: 'TOP', image: 'Rectangle\ 26.png' }];

//   const sliderImages1 = [
//     "/slider1.png",
//     "/slider2.png",
//     "/slider3.png",
//     "/slider4.png",
//     "/slider5.png",
//     "/slider6.png",
//     "/slider7.jpg",
//     "/slider8.jpg",
//     "/slider9.jpg",
//     "/slider10.jpg",
//   ];

//   const sliderImages2 = [
//     "/slider11.jpg",
//     "/slider12.jpg",
//     "/slider13.jpg",
//     "/slider14.jpg",
//     "/slider15.jpg",
//     "/slider16.jpg",
//     "/slider17.jpg",
//     "/slider18.jpg",
//     "/slider19.jpg",
//     "/slider20.jpg",
//   ];

//   const LineItems1 = [
//     'КАРТИНИ',
//     'ЛЮСТРА',
//     'ЛАМПА',
//     'КОРЗИНА ДЛЯ БІЛИЗНИ',
//     'ПЛЕДИ',
//     'МАТРАЦ',
//     'СТЕЛАЖ',
//     'КИЛИМ',
//     'ДЕКОРАТИВНІ РОСЛИНИ',
//     'РУШНИК',
//     'ШАФА',
//   ];

//   const LineItems2 = [
//     'ШТОРИ',
//     'ДЗЕРКАЛО',
//     'ВАЗА',
//     'ГОДИННИК',
//     'ПОЛИЦІ',
//     'ПОДУШКИ',
//     'СВІЧКИ',
//     'ДЕКОР',
//     'ПОСТІЛЬНА БІЛИЗНА',
//     'КУХОННИЙ ПОСУД',
//     'КУХОННА МИЙКА'
//   ]

//   return (
//     <div className="app">
//       <HeaderMain />

//       <div className="wrap">
//         <main>
//           <section className="first-main-section">
//             <div className="content">
//               <div className="left-content">
//                 <h1 className="main-maintext">ВСЕ ДЛЯ ДОМУ</h1>
//                 <div className="cta-buttons">
//                   <button className="cta-primary">СТВОРИТИ АКАУНТ ТА ПОЧАТИ!</button>
//                   <button className="cta-secondary">КАТАЛОГ&#9662;</button>
//                 </div>
//                 <div className="product-cards">
//                   {products.map((product) => (
//                     <div key={product.id} className="product-card">
//                       <div className="product-image">
//                         <img src={product.image} alt={product.title} />
//                         <span className="product-tag">{product.tag}</span>
//                       </div>
//                       <div className="product-info">
//                         <h3>{product.title}</h3>
//                         <p>{product.subtitle}</p>
//                         <span className="product-price">{product.price}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <p className="promo-text">
//                   ЛОВИ МОМЕНТ! Знижки до <strong>60%</strong> на вибрані категорії товарів!
//                 </p>
//               </div>
//             </div>
//           </section>




//           <section className="second-main-section">
//             <p className="title-section-main">ЗНАЙДИ ТЕ, ШО ШУКАЄШ!</p>
//             <div className="promo">
//               <div className="row">
//                 <div className="card">
//                   <img src="PhotoSecondSection1.png" />
//                   <div className="bar">
//                     <span>НАША НОВА КОЛЛЕКЦІЯ</span>
//                     <img src="./button for slider.png" />
//                   </div>
//                 </div>
//                 <div className="card">
//                   <img src="PhotoSecondSection2.png" />
//                   <div className="bar">
//                     <span>НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ</span>
//                     <img src="./button for slider.png" />
//                   </div>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="card full">
//                   <img src="PhotoSecondSection3.png" style={{ width: '1480px' }} />
//                   <div className="bar right">
//                     <img src="./button for slider.png" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>




//           <section className="third-main-section">
//             <p className="title-section-main">РЕКОМЕНДАЦІЇ</p>
//             <SliderMain images={sliderImages1} />
//             <p className="title-section-main">НАЙКРАЩІ НАБОРИ</p>
//             <SliderMain images={sliderImages2} />
//           </section>




//           <section className="four-main-section">
//             <p className="title-section-main">НОВИНКИ</p>
//             <div className="gallery-grid">
//               <img src="four-sections-photo1.png" className="four-sections-photo1" />
//               <img src="four-sections-photo2.png" className="four-sections-photo2" />
//               <img src="four-sections-photo3.png" className="four-sections-photo3" />
//               <img src="four-sections-photo4.png" className="four-sections-photo4" />
//             </div>
//           </section>



//           <section className="five-main-section">
//             <CatalogMain />
//           </section>


//           <section className="six-main-section">
//             <p className="title-section-main">ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</p>
//             <div className="masonry-grid">
//               <div className="image-grid">
//                 <div className="image-wrapper">
//                   <img src="six-section-idea1.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper">
//                   <img src="six-section-idea2.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper">
//                   <img src="six-section-idea3.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper">
//                   <img src="six-section-idea4.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper central">
//                   <img src="six-section-idea5.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper">
//                   <img src="six-section-idea6.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="seven-main-recomendation">
//             <p className="title-section-main">ДОДАТКОВІ РЕКОМЕНДАЦІЇ</p>
//             <LineMain items={LineItems1} />
//             <div className="masonry-grid">
//               <div className="image-grid">
//                 <div className="image-wrapper">
//                   <img src="seven-main-recomendation1.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper">
//                   <img src="seven-main-recomendation2.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper">
//                   <img src="seven-main-recomendation3.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper">
//                   <img src="seven-main-recomendation4.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper central">
//                   <img src="seven-main-recomendation5.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//                 <div className="image-wrapper">
//                   <img src="seven-main-recomendation6.png" />
//                   <img src="strelka.png" className="corner-icon" style={{ width: '40px' }}/>
//                 </div>
//               </div>
//             </div>
//             <LineMain items={LineItems2} />
//           </section>


//           <section className="eight-main-section">
//             <p className="title-section-main">ВАЖЛИВА ІНФОРМАЦІЯ</p>
//             <div className="info-card">
//               <div className="info-card-image">
//                 <img src="eight-main-cards1.png" />
//               </div>
//               <div className="info-card-text">
//                 <h3 className="info-card-title">ВАЖЛИВА ІНФОРМАЦІЯ</h3>
//                 <p className="info-card-description">
//                 У нашому меблевому магазині деякі продукти можна стилізувати за кольором і матеріалом під ваші особисті вподобання, створюючи унікальний дизайн для вашого дому. Звертайтесь до наших консультантів щоб дізнатися деталі!
//                 </p>
//               </div>
//             </div>
//           </section>
//         </main>


//       </div>
//       <FooterMain />
//     </div>
//   );
// };
// export default App;

