import React from 'react';
import Pelicula from './Pelicula';

const Carrousel = ({ Peliculas }) => {

    return ( 
        <div class="media-scroller snaps-inline">
            {Peliculas.map((pelicula, index) => {
                return (
                    <Pelicula key={index} pelicula={pelicula}/>
                )
            })}
        </div>

     );
}
 
export default Carrousel;