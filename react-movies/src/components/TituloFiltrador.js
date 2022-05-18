const TituloFiltrador = () => {
    return ( 
        <>
          <div className="row">
              <div className="mt-1 ml-4 mr-4 col-md-2">
                <h2 className="section-title">Popular</h2>
              </div>
              <div className="mt-2 col-md-10">
                <div className="category-head">
                  <ul>
                    <div className="category-title active" id="culture">
                      <li>Streaming</li>
                    </div>
                    <div className="category-title" id="politics">
                      <li>Television</li>
                    </div>
                    <div className="category-title" id="finance">
                      <li>Alquiler</li>
                    </div>
                    <div className="category-title" id="business">
                      <li>Cines</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
        </>
     );
}
 
export default TituloFiltrador