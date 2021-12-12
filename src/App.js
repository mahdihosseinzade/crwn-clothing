
import './App.css';
import { Route , Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shop/ShopPage.jsx';

function App() {
  return (
    <Routes>
      <Route  element={<HomePage/>} path='/' />
      <Route element={<ShopPage/>} path='/shop' />
    </Routes>
  );
}

export default App;
