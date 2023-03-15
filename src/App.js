import {BrowserRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { RouterApp } from './router/RouterApp';
import { CartContextApp } from './CartContext';
// import { CarouselNews } from './components/CarouselNews';


function App() {
  const {allProducts} = CartContextApp();
  return (
      <BrowserRouter>      
        <NavBar/>        
        {/* <CarouselNews props={allProducts} /> */}
        <RouterApp />
      </BrowserRouter>
  );
}
export default App;