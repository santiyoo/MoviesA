import React from 'react';
import Carrousel from './Carrousel';
import TituloFiltrador from './TituloFiltrador';

const Bloque = ({titulo, filtros}) => {
    return ( 
        <div className="container mt-5">
            <TituloFiltrador titulo={titulo} filtros={filtros}/>
            <Carrousel/>
        </div>
     );
}
 
export default Bloque;