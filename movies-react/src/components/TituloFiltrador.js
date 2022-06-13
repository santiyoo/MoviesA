import React from 'react';

const TituloFiltrador = ({titulo, filtros}) => {
  return ( 
    <>
      <div className="row">
        <div className="mt-1 mr-5 col-md-2">
          <h2 className="section-title" align="right">{titulo}</h2>
        </div>
        <div className="mt-2 col-md-10">
          <div className="category-head">
            <ul>
              {filtros.map((filtro)=>{
                return(
                  <div className="category-title">
                  <li>{filtro}</li>
                  </div>    
                )  
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default TituloFiltrador;