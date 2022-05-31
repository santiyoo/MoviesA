import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/detail/:id" element={<DetailsPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
