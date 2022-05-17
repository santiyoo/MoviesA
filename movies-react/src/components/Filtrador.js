import React from 'react';

const Filtrador = (arrayTituloFilt) => {
    const {id, nombre, filtros} = arrayTituloFilt
    return (  
        arrayTituloFilt.map(filtros=>{
            <div className="mt-2 col-md-10">
                <div className="category-head">
                    <ul>
                    <div className="category-title active" id="culture">
                        <li>{filtros}</li>
                    </div>
                    </ul>
                </div>
            </div>
        })
    );
}
 
export default Filtrador;