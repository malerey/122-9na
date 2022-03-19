import useFetchPeliculas from "../hooks/useFetchPeliculas"

const UltimosLanzamientos = () => {
  const { peliculas, isLoading }  = useFetchPeliculas("upcoming", "movie")

  return (
    <div>
      <h2>Ultimos lanzamientos PELICULAS</h2>
      {isLoading && <p>ESTA CARGANDO</p>}
      {peliculas.map(pelicula => (
        <h3 key={pelicula.id}>{pelicula.title}</h3>
      ))}
    </div>
  );
};

export default UltimosLanzamientos;
