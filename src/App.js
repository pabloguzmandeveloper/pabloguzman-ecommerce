import {BrowserRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { RouterApp } from './router/RouterApp';
import { CartContextProvider } from './CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>      
        <NavBar/>      
        <RouterApp />
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;