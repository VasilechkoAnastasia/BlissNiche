import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage  from './components/MainPage';
import RoomPage from './components/RoomPage';
import BacketPage from './components/BacketPage';
import WishlistPage from './components/WishlistPage';
import Login from './components/Login';
import Register from './components/register';
import Desing from './components/design';
import IdeasPage from './components/IdeasPage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/roompage" element={<RoomPage />} />
        <Route path='/backetpage' element={<BacketPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/ideas' element={<IdeasPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/design' element={<Desing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

