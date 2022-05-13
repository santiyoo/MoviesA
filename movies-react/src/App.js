import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import poster from './img/poster.png';

function App() {
  return (
    <>
    <Header/>
    
    <div className="mt-5 mb-5">
      <div className="text-center">
        <form action="">
          <div className="container">
            <input type="text" className="buscador form-control" placeholder="Buscar Pelicula, serie, persona..."/>
          </div>
        </form>
      </div>
    </div>

    <div className="container mt-3">
      <div className="row">
        <div className="mt-1 ml-4 mr-4 col-md-2">
          <h2 className="section-title">Popular</h2>
        </div>
        <div className="mt-2 col-md-10">
          <div className="category-head">
            <ul>
              <div className="category-title active" id="culture">
                <li>Streaming</li>
                <span><i className="fas fa-theater-masks"></i></span>
              </div>
              <div className="category-title" id="politics">
                <li>Television</li>
                <span><i className="fas fa-landmark"></i></span>
              </div>
              <div className="category-title" id="finance">
                <li>Alquiler</li>
                <span><i className="fas fa-chart-area"></i></span>
              </div>
              <div className="category-title" id="business">
                <li>Cines</li>
                <span><i className="fas fa-coins"></i></span>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="media-scroller media-scroller--with-groups snaps-inline">
        <div className="media-group">
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster} alt=""/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
        </div>
        <div className="media-group">
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div className="container mt-5">
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
      <div className="media-scroller media-scroller--with-groups snaps-inline">
        <div className="media-group">
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
        </div>
        <div className="media-group">
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
          <a href="detalle.html">
            <div className="media-element">
              <img src={poster}/>
              <div className="ml-3">
                <h6>Pelicula</h6>
                <p>Año de salida</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div className="container mt-5 mb-5">
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
        <div className="media-scroller media-scroller--with-groups snaps-inline">
          <div className="media-group">
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
          </div>
          <div className="media-group">
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
            <a href="detalle.html">
              <div className="media-element">
                <img src={poster}/>
                <div className="ml-3">
                  <h6>Pelicula</h6>
                  <p>Año de salida</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>


    <Footer/>
    </>
  );
}

export default App;
