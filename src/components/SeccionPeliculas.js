import PeliculaItem from './PeliculaItem';

const SeccionPeliculas = ({ titulo, isLoading, peliculas, isTv }) => {
  return (
    <div className="relative">
      <h2>{titulo}</h2>
      {!isLoading &&
        peliculas.map(pelicula => (
          <PeliculaItem
            key={pelicula.id}
            titulo={isTv ? pelicula.name : pelicula.title}
            imagen={pelicula.poster_path}
          />
        ))}

      <button>prev</button>
      <button>next</button>
    </div>
  );
};

export default SeccionPeliculas;
