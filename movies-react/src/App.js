import './App.css';
import Bloque from './components/bloque';
import Footer from './components/Footer';
import Header from './components/Header';

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
    <Header/>
    
    <Bloque/>
    <Bloque/>
    <Bloque/>

    {/* <div className="container mt-5">
      <div className="row">
        <div className="mt-1 ml-4 mr-4 col-md-2">
          <h2 className="section-title">Gratis</h2>
        </div>
        <div className="mt-2 col-md-10">
          <div className="category-head">
            <ul>
              <div className="category-title active" id="culture">
                <li>Peliculas</li>
                <span><i className="fas fa-theater-masks"></i></span>
              </div>
              <div className="category-title" id="politics">
                <li>Television</li>
                <span><i className="fas fa-landmark"></i></span>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Carrousel/>
    </div> */}

    {/* <div className="container mt-5 mb-5">
      <div className="row">
        <div className="mt-1 ml-4 mr-4 col-md-2">
          <h2 className="section-title">Trending</h2>
        </div>
        <div className="mt-2 col-md-10">
          <div className="category-head">
            <ul>
              <div className="category-title active" id="culture">
                <li>Hoy</li>
                <span><i className="fas fa-theater-masks"></i></span>
              </div>
              <div className="category-title" id="politics">
                <li>Semana</li>
                <span><i className="fas fa-landmark"></i></span>
              </div>
            </ul>
          </div>
        </div>
        <Carrousel/>
      </div>
    </div> */}

    <Footer/>
    </>
  );
}

export default App;
