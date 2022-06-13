import React from 'react';
import Filtrador from './Filtrador';

const TituloFiltrador = ({titulo, filtros, changeTag, filtrosTag}) => {
  return ( 
    <>
      <div className="row mb-3">
        <div className="mt-1 mr-5 col-md-2">
          <h2 className="section-title" align="right">{titulo}</h2>
        </div>
        <div className="mt-2 col-md-10 mr-3">
          {filtros.map((filtro)=>{
            return(
              // filtrosTag.map((filtroTag)=>{
                // return(
                  <button className='btn btn-primary ml-2 mr-3' onClick={() => changeTag(titulo, filtro.tag, filtro.tipo)}>{filtro.nombre}</button>  
                // )
              // })
            )  
          })}
        </div>
      </div>
    </>
  );
}
 
export default TituloFiltrador;