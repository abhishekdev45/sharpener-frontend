import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import axios from 'axios';
import MoviesList from './components/MoviesList';
import AddMovieForm from './components/AddMovieForm';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const retryInterval = useRef(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://swapi.dev/api/films/');
      const transformedMovies = response.data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
      setIsRetrying(false);
      clearInterval(retryInterval.current);
    } catch (error) {
      setError('Something went wrong ... Retrying');
      setIsLoading(false);
      setIsRetrying(true);
      if (!retryInterval.current) {
        retryInterval.current = setInterval(fetchMoviesHandler, 5000);
      }
    }
  }, []);

  const cancelRetryHandler = useCallback(() => {
    setIsRetrying(false);
    clearInterval(retryInterval.current);
    retryInterval.current = null;
  }, []);

  const addMovieHandler = useCallback((movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();

    return () => {
      if (retryInterval.current) {
        clearInterval(retryInterval.current);
      }
    };
  }, [fetchMoviesHandler]);

  const renderedMoviesList = useMemo(() => {
    return <MoviesList movies={movies} />;
  }, [movies]);

  return (
    <React.Fragment>
      <section>
        <AddMovieForm onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        {isRetrying && <button onClick={cancelRetryHandler}>Cancel Retry</button>}
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && !error && renderedMoviesList}
      </section>
    </React.Fragment>
  );
}

export default App;
