import {BrowserRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { RouterApp } from './router/RouterApp';

function App() {
  return (
    <BrowserRouter>      
      <NavBar/>      
      <RouterApp />
    </BrowserRouter>
  );
}
export default App;