export default function DetailsPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
    </nav>

    <div className="container mt-3">
        <div className="row">
            <div className="col-md-4">
                <img src="img/poster.png" alt="" width="100%"/>
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

        <div className="row">
            <div className="col-md-10">
                <div className="container">
                    <h2 className="section-title">Cast</h2>
                    <div className="media-scroller media-scroller--with-groups snaps-inline">
                      <div className="media-group">
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                      </div>
                      <div className="media-group">
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                          <div className="media-element mr-2">
                            <img src="img/perfil.png" alt=""/>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <p><b>Status</b></p>
                <p>Released</p>
             
                <p><b>Status</b></p>
                <p>Released</p>
               
                <p><b>Status</b></p>
                <p>Released</p>
              
                <p><b>Status</b></p>
                <p>Released</p>
            </div>
        </div>
    </div>
    
    <div className="p-5"></div>

    <footer className="border-top footer text-muted">
      <div className="container text-center">
        &copy; 2021 - Movies - Abraldes & Yoo
      </div>
    </footer>
    </>
  );
}
