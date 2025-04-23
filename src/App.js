import React from 'react';
import './App.css';

const App = () => {
  // const navItems = ['Меню', 'Товари', 'Книги', 'Дизайн'];
  const products = [{ id: 1, title: 'ПОДУШКИ', subtitle: 'спальня кімната вітальня', price: '12$', tag: 'TOP', image: 'Rectangle\ 28.png'},
  { id: 2, title: 'КОВДРА', subtitle: 'спальня кімната вітальня', price: '30$', tag: 'TOP', image: 'Rectangle\ 27.png'},
  { id: 3, title: 'ЛІЖКО', subtitle: 'спальня кімната вітальня', price: '30$', tag: 'TOP', image: 'Rectangle\ 26.png'}];
  const hashtags = ['#вседлядому', '#швидкотазручно', '#buy now'];

  return (
    <div className="app">
      {/* Top Banner */}
      <div className="strip">
        <p className="text">#buy now #вседлядому #швидкотазручно #buy now #вседлядому #швидкотазручно #buy now #вседлядому #швидкотазручно #buy now #вседлядому #швидкотазручно</p>
      </div>
      <div className="user-actions">
        <nav>
          <a className="action-button" href="#">☰<br></br>Меню</a>
          <img src="./Union.png" />
          <a className="action-button" href="#"> Товари</a>
          <a className="action-button" href="#"> Книги</a>
          <a className="action-button" href="#"> Дизайн</a>
          <a className="action-button" href="#"><img src="./uil_user.png" /> Київ</a>
          <a className="action-button" href="#"><img src="./uil_user_profile.png" /> Привіт! Увійдіть В Систему</a>
          <a className="action-button" href="#"><img src="./basket_for_shopping.png" /><img src="./like.png" /></a>
        </nav>
      </div>
      <div className="wrap">
        <header>
          {/* <nav>
          {navItems.map((item, index) => (
            <span key={index} className={`nav-item ${index === 0 ? 'active' : ''}`}>{item}</span>
          ))}
        </nav> */}
          <div className="search-bar">
            <img src="./Group.png" className="search-icon" />
            {/* <span className="search-icon"></span> */}
            <input type="text" placeholder="Пошук" />
          </div>
        </header>
        <main>
          <div className="content">
            <div className="left-content">
              <h1>ВСЕ ДЛЯ ДОМУ</h1>
              <div className="cta-buttons">
                <button className="cta-primary">СТВОРИТИ АКАУНТ ТА ПОЧАТИ!</button>
                <button className="cta-secondary">
                  КАТАЛОГ &#9662;
                </button>
              </div>


              <div className="product-cards">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                      <span className="product-tag">{product.tag}</span>
                    </div>
                    <div className="product-info">
                      <h3>{product.title}</h3>
                      <p>{product.subtitle}</p>
                      <span className="product-price">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div>


              {/* <div className="product-cards">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <span className="product-tag">{product.tag}</span>
                    </div>
                    <div className="product-info">
                      <h3>{product.title}</h3>
                      <p>{product.subtitle}</p>
                      <span className="product-price">{product.price}</span>
                    </div>
                  </div>
                ))}
              </div> */}
              <p className="promo-text">
                ЛОВИ МОМЕНТ! Знижки до <strong>60%</strong> на вибрані категорії товарів!
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default App;


// import React from 'react';
// import './App.css'

// export default function App() {
//   return (
//     <div className="Main">
//       {/* Top Banner */}
//       <div className="strip">
//         <p className="text">#buy now #вседлядому #швидкотазручно #buy now #вседлядому #швидкотазручно #buy now #вседлядому #швидкотазручно #buy now #вседлядому #швидкотазручно</p>
//       </div>

//       {/* Navigation */}
//       <div className="w-full bg-white shadow-md flex justify-between items-center px-6 py-4">
//         <div className="flex items-center gap-x-4">
//           <button className="text-xl">☰</button>
//           <div className="text-2xl font-bold">BN</div>
//           <nav className="hidden md:flex gap-x-6 text-sm text-gray-700">
//             <a href="#">Товари</a>
//             <a href="#">Кімнати</a>
//             <a href="#">Дизайн</a>
//           </nav>
//         </div>
//         <div className="flex items-center gap-x-4">
//           <span>Київ</span>
//           <input
//             type="text"
//             placeholder="Пошук"
//             className="border rounded-full px-4 py-1 text-sm"
//           />
//           <button>Увійти</button>
//           <button>Корзина</button>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="w-full bg-gray-100 text-center py-12 relative">
//         <h1 className="text-4xl font-bold">ВСЕ ДЛЯ ДОМУ</h1>
//         <span className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-300 text-xs px-2 py-0.5 rounded">merch zx</span>
//       </div>

//       {/* Product & CTA Section */}
//       <div className="w-full px-4 md:px-16 py-8 flex flex-col md:flex-row gap-8">
//         {/* Left Side: Product Cards */}
//         <div className="md:w-2/3 bg-white shadow rounded-lg p-6">
//           <div className="flex justify-between mb-6">
//             <button className="bg-black text-white px-4 py-2 rounded-full text-sm">СТВОРИТИ АККАУНТ ТА ПОЧАТИ!</button>
//             <button className="border px-4 py-2 rounded-full text-sm">КАТАЛОГ ▼</button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {[
//               { title: 'ПОДУШКИ', price: '12$', img: 'image1.jpg' },
//               { title: 'КОВДРА', price: '30$', img: 'image2.jpg' },
//               { title: 'ЛІЖКО', price: '414$', img: 'image3.jpg' }
//             ].map((item, idx) => (
//               <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden text-center p-4">
//                 <img src={item.img} alt={item.title} className="w-full h-40 object-cover mb-2" />
//                 <div className="text-sm font-semibold">{item.title}</div>
//                 <div className="text-xs text-gray-500">спальна кімната</div>
//                 <div className="text-lg font-bold mt-1">{item.price}</div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4 text-sm text-center text-gray-700">
//             ЛОВИ МОМЕНТ | <span className="font-bold">Знижки до 60%</span> на вибрані категорії товарів!
//           </div>
//         </div>

//         {/* Right Side: Couch Image */}
//         <div className="md:w-1/3">
//           <img src="sofa.jpg" alt="Диван" className="w-full h-full object-cover rounded-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };