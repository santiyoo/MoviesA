import React from 'react';

const Buscador = ({setFiltro}) => {
    
    return ( 
        <>
        <div className="mt-5 mb-5">
            <div className="text-center">
                <form action="">
                    <div className="container">
                        <input className="form-control" type="text" placeholder="Buscar Pelicula, serie, persona..." onChange={(e) => setFiltro(e.currentTarget.value)}/>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
 
export default Buscador;