import useFetchPeliculas from "../hooks/useFetchPeliculas"

const Populares = () => {

// const [series, isLoading] = useFetchPeliculas("popular", "tv")
 const { peliculas, isLoading } = useFetchPeliculas("popular", "tv")

  return (
    <div>
      <h2>Series Populares</h2>
      {isLoading && <p>ESTA CARGANDO</p>}
      {peliculas.map(serie => (
        <h3 key={serie.id}>{serie.name}</h3>
        ))}
    </div>
  )
}

export default Populares
