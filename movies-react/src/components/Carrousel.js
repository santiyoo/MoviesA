import React from 'react';
import poster from '../img/poster.png';
import {Link} from 'react-router-dom'
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