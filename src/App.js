import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage  from './components/MainPage';
import RoomPage from './components/RoomPage';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/roompage" element={<RoomPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

