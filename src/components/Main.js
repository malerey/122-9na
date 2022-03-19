import useFetchPeliculas from '../hooks/useFetchPeliculas';
import SeccionPeliculas from './SeccionPeliculas';
import './Main.css';
import Loader from './Loader';
import { cortarArrayPeliculas } from '../utils/variables';

const Main = () => {
  const { peliculas, isLoading } = useFetchPeliculas('popular', 'movie');
  // const { peliculasBusqueda, isLoadingBusqueda } = useFetchPeliculas(
  //   'trending',
  //   'movie',
  //   "week"
  // );
  const { peliculas: series, isLoading: isLoadingSeries } = useFetchPeliculas(
    'popular',
    'tv',
  );

  const isLoadingGeneral = isLoading || isLoadingSeries;

  return (
    <div className="flex">
      <Loader isLoading={isLoadingGeneral} />
      {!isLoadingGeneral && (
        <>
          <SeccionPeliculas
            titulo="Peliculas Populares"
            isLoading={isLoadingGeneral}
            peliculas={cortarArrayPeliculas(peliculas)}
            isTv={false}
          />
          <SeccionPeliculas
            titulo="Series Populares"
            isLoading={isLoadingGeneral}
            peliculas={series}
            isTv={true}
          />
        </>
      )}
    </div>
  );
};

export default Main;
