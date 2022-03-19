const PeliculaItem = ({titulo, imagen}) => {
  return(
    <div className="flex">
    <h3>{titulo}</h3>
    <img src={`https://image.tmdb.org/t/p/original${imagen}`} />
    </div>
  )
}

export default PeliculaItem
