import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		// <div className='container movie-app'>
		// 	<div className='row d-flex align-items-center mt-4 mb-4'>
		// 		<MovieListHeading heading='Movies' />
		// 		<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
		// 	</div>
		// 	<div className='row my-5'>
		// 		<div className="block my-5">
		// 			<MovieList
		// 				movies={movies}
		// 				handleFavouritesClick={addFavouriteMovie}
		// 				favouriteComponent={AddFavourites}
		// 			/>
		// 		</div>

		// 	</div>
		// </div>
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<div className="block my-5">
					<MovieList
						movies={movies}
						favouriteComponent={AddFavourites}
						handleFavouritesClick={addFavouriteMovie}
					/>
				</div>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
			<div className="block my-5">
				<MovieList movies={favourites} favouriteComponent={AddFavourites} />
				</div>
			</div>
		</div>
	);
};

export default App;