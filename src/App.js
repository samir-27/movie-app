import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/searchBox';

const App = () => {
	const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue]=useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
   
      setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
      <div className="row  d-flex position-fixed align-items-center m-3">
        <MovieListHeading className="position-fixed" heading="movies"/>
        <SearchBox className="position-fixed" searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
			<div className='row my-5'>
        <div className="block my-5">
        <MovieList movies={movies} />
        </div>
			
			</div>
		</div>
	);
};

export default App;