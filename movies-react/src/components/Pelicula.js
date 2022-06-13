import React from "react";
import { Link } from "react-router-dom";

const Pelicula = ({pelicula}) => {

    return (  
        <>
        <Link to={`/detail/${pelicula.id}`}>
            <div class="ml-3">
            <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}  alt=""/>
                <h6>{ pelicula.title }</h6>
                <p>Estreno: { pelicula.release_date }</p>
            </div>
        </Link>
        </>
    );
}

export default Pelicula;