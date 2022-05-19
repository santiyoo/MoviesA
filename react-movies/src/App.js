import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details" element={<DetailsPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

