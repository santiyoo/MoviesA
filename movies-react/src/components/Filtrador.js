import React from 'react';

const Filtrador = (arrayTituloFilt) => {
    return (  
        arrayTituloFilt.map(filtros=>{
            <button>{filtros}</button>
        })
    );
}
 
export default Filtrador;