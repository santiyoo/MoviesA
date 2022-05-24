import Bloque from "../components/bloque";
import Header from "../components/Header";

export default function HomePage() {
  const arrayTituloFilt = [
    {
      titulo: "Popular",
      filtros: ["Streaming", "Television", "Alquiler", "Cines"]

    },
    {
      titulo: "Gratuito",
      filtros: ["Peliculas", "Television"]
    },
    {
      titulo: "Trending",
      filtros: ["Hoy", "Semana"]
    }
  ]
  
  return (
    <>
      <Header/>
      
      <Bloque titulo={arrayTituloFilt[0].titulo} filtros={arrayTituloFilt[0].filtros}/>
      <Bloque titulo={arrayTituloFilt[1].titulo} filtros={arrayTituloFilt[1].filtros}/>
      <Bloque titulo={arrayTituloFilt[2].titulo} filtros={arrayTituloFilt[2].filtros}/>
    </>
  );
}
