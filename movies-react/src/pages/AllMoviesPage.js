// import React from 'react';
// import Buscador from '../components/buscador';
// import Header from '../components/Header';
// import { allMovies } from "../Fetch";
// import { useState, useEffect } from "react";
 

// const AllMovies = () => {
//     const [filtro, setFiltro] = useState("");
//     const [peliculas, setPeliculas] = useState([])
//     const [peliculasfilter, setPeliculasFilter] = useState([])

//     useEffect(() => {
//         allMovies().then((data) => {
//             setPeliculas(data.results);
//             setPeliculasFilter(data.results);
//         })
//     },[])

//     useEffect(()=>{
//         setPeliculasFilter(peliculasfilter.filter(x=>x.title.includes(filtro)))
//       },[filtro])

//       console.log(peliculas)
//     return (  
//         <>
//             <Header setFiltro={setFiltro}/>

//             {peliculas.map((x)=>{
//                 <p>{x.title}</p>
//             })}
//         </>
//     );
// }
 
// export default AllMovies;