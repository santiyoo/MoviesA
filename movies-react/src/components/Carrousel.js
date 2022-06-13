import React from 'react';
import Pelicula from './Pelicula';

const Carrousel = ({ Peliculas }) => {

    return ( 
        <div className="media-scroller snaps-inline">
            {Peliculas.map((pelicula, index) => {
                return (
                    <Pelicula key={index} pelicula={pelicula}/>
                )
            })}
        </div>

     );
}
 
export default Carrousel;