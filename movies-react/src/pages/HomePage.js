import Bloque from "../components/bloque";
import Header from "../components/Header";
import { nowPlaying, popular, topRated } from "../Fetch";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [peliculasnp, setPeliculasnp] = useState([]);

  useEffect(() => {
    nowPlaying().then((data) => {
      setPeliculasnp(data.results);
    },[]);
  })

  const [peliculasp, setPeliculasp] = useState([]);

  useEffect(() => {
    popular().then((data) => {
      setPeliculasp(data.results);
    },[]);
  })

  const [peliculastr, setPeliculastr] = useState([]);

  useEffect(() => {
    topRated().then((data) => {
      setPeliculastr(data.results);
    },[]);
  })

  const arrayTituloFilt = [
    {
      titulo: "Playing",
      filtros: ["Streaming", "Television", "Alquiler", "Cines"]

    },
    {
      titulo: "Popular",
      filtros: ["Peliculas", "Television"]
    },
    {
      titulo: "Top Rated",
      filtros: ["Hoy", "Semana"]
    }
  ]
  
  return (
    <>
      <Header/>
      
      <Bloque Peliculas={peliculasnp} titulo={arrayTituloFilt[0].titulo} filtros={arrayTituloFilt[0].filtros}/>
      <Bloque Peliculas={peliculasp} titulo={arrayTituloFilt[1].titulo} filtros={arrayTituloFilt[1].filtros}/>
      <Bloque Peliculas={peliculastr} titulo={arrayTituloFilt[2].titulo} filtros={arrayTituloFilt[2].filtros}/>
    </>
  );
}
