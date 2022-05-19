import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // const arrayTituloFilt = [
  //   {
  //     id: 1,
  //     nombre: "Popular",
  //     filtros: ["Streaming", "Television", "Alquiler", "Cines"]

  //   },
  //   {
  //     id: 2,
  //     nombre: "Gratis",
  //     filtros: ["Peliculas", "Television"]
  //   },
  //   {
  //     id: 3,
  //     nombre: "Trending",
  //     filtros: ["Hoy", "Semana"]
  //   }
  // ]
  
  return (
    <>
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details" element={<DetailsPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
