import React from 'react';
import Carrousel from './Carrousel';
import TituloFiltrador from './TituloFiltrador';

const Bloque = () => {
    return ( 
        <div className="container mt-5">
            <TituloFiltrador/>
            <Carrousel/>
        </div>
     );
}
 
export default Bloque;