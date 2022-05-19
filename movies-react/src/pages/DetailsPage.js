import poster from '../img/poster.png';
import perfil from '../img/perfil.png';

export default function DetailsPage() {
  return (
    <>

    <div className="container mt-3">
      <div className="row">
          <div className="col-md-4">
              <img src={poster} alt="" width="100%"/>
          </div>
          <div className="col-md-8">
            <h2><b>Pelicula 1</b>(2012)</h2>
            <p>PG-13 11/11/2012 - Ciencia Ficción</p>
            <h4>Resumen</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            <div className="row">
              <div className="col-md-4">
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              </div>
              <div className="col-md-4">
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              </div>
              <div className="col-md-4">
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              </div>
            </div>
          </div>
      </div>

      <div className="row mt-5">
      <div className="col-md-10">
        <div className="container">
          <h2 className="section-title">Cast</h2>
          <div className="media-scroller snaps-inline">
            <div className="media-element">
              <img src={perfil} alt=""/>
            </div>
            <div className="media-element">
              <img src={perfil} alt=""/>
            </div>
            <div className="media-element">
              <img src={perfil} alt=""/>
            </div>
            <div className="media-element">
              <img src={perfil} alt=""/>
            </div>
            <div className="media-element">
              <img src={perfil} alt=""/>
            </div>
            <div className="media-element">
              <img src={perfil} alt=""/>
            </div>
            <div className="media-element">
              <img src={perfil} alt=""/>
            </div>
            <div className="media-element">
              <img src={perfil} alt=""/>
            </div>
            <div className="media-element">
              <img src={perfil} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <p><b>Status</b></p>
        <p>Released</p>
        <br/>
        <p><b>Status</b></p>
        <p>Released</p>
        <br/>
        <p><b>Status</b></p>
        <p>Released</p>
        <br/>
        <p><b>Status</b></p>
        <p>Released</p>
      </div>
    </div>
    </div>
    </>
  );
}
