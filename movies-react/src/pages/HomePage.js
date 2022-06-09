import Bloque from "../components/bloque";
import Header from "../components/Header";
import { nowPlaying, popular, topRated } from "../Fetch";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [peliculasnp, setPeliculasnp] = useState([]);
  const [peliculasp, setPeliculasp] = useState([]);
  const [peliculastr, setPeliculastr] = useState([]);
  const [peliculasnpfilter, setPeliculasnpFilter] = useState([]);
  const [peliculaspfilter, setPeliculaspFilter] = useState([]);
  const [peliculastrfilter, setPeliculastrFilter] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    nowPlaying().then((data) => {
      setPeliculasnp(data.results);
      setPeliculasnpFilter(data.results);
    })
    popular().then((data) => {
      setPeliculasp(data.results);
      setPeliculaspFilter(data.results)
    })
    topRated().then((data) => {
      setPeliculastr(data.results);
      setPeliculastrFilter(data.results)
    })
  },[]);

  useEffect(()=>{
    setPeliculasnpFilter(peliculasnp.filter(x=>x.title.includes(filtro)))
    setPeliculaspFilter(peliculasp.filter(x=>x.title.includes(filtro)))
    setPeliculastrFilter(peliculastr.filter(x=>x.title.includes(filtro)))
  },[filtro])

  const arrayTituloFilt = [
    {
      titulo: "Playing",
      filtros: ["Cines", "Television"]

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
      <Header setFiltro={setFiltro}/>
 
      <Bloque Peliculas={peliculasnpfilter} titulo={arrayTituloFilt[0].titulo} filtros={arrayTituloFilt[0].filtros}/>
      <Bloque Peliculas={peliculaspfilter} titulo={arrayTituloFilt[1].titulo} filtros={arrayTituloFilt[1].filtros}/>
      <Bloque Peliculas={peliculastrfilter} titulo={arrayTituloFilt[2].titulo} filtros={arrayTituloFilt[2].filtros}/>
    </>
  );
}
