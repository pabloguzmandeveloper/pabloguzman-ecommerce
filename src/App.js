import {BrowserRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { RouterApp } from './router/RouterApp';
import { CartContextProvider } from './CartContext';
import { CarouselNews } from './components/CarouselNews';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>      
        <NavBar/>
        <CarouselNews />
        <RouterApp />
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;