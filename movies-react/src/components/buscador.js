import React from 'react';
import { allMovies } from '../Fetch';
import { useState, useEffect } from "react";

const Buscador = () => {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        allMovies().then((data) => {
            setPeliculas(data.results);
        })
    },[])


    const searchMovie = async (query) => {
        allMovies(query).then((data) => {
            setPeliculas(data.results);
        })
    }
    
    return ( 
        <>
        <div className="mt-5 mb-5">
            <div className="text-center">
                <form action="">
                    <div className="container">
                        <input className="form-control" type="text" placeholder="Buscar Pelicula, serie, persona..." onChange={(e) => searchMovie(e.currentTarget.value)} data={peliculas}/>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
 
export default Buscador;