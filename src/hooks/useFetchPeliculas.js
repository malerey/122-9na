import { useState, useEffect } from 'react';

// esto es un custom hook
// un custom hook es una funcion reutilizable que permite usar un estado
// lo manejamos igual que a otra funcion de javascript

import {
  urlBase,
  apiKey,
  queryParamLenguaje,
  definirURL,
} from '../utils/variables';

const useFetchPeliculas = (categoria, tipo, search) => {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = `${urlBase}
  ${definirURL(categoria, tipo, search)}
  ?${apiKey}${queryParamLenguaje}=es`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // esto no sirve para los detalles de la pagina
        setPeliculas(data.results);
        setIsLoading(false);
      });
  }, []);

  // return [peliculas, isLoading]
  return {
    peliculas: peliculas,
    isLoading: isLoading,
  };
};

export default useFetchPeliculas;
