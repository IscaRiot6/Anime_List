import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import FavoritesNavBar from './FavoritesNavBar'

function Genres({ animeList }) {
  const [selectedGenre, setSelectedGenre] = useState('');
  const genres = [...new Set(animeList.map((anime) => anime.genre))];

  const filteredAnimeList = animeList.filter(
    (anime) => anime.genre === selectedGenre
  );

  const createAnimeList = () => {
    if (filteredAnimeList.length === 0) {
      return <p>No anime found</p>;
    }

    return filteredAnimeList.map((item) => {
      return (
        <Link to={`/anime/${item.id}`} key={item.id} className='anime-card'>
          <img src={item.imageUrl} alt='' />
          {item.title && <h3>{item.title}</h3>}
        </Link>
      );
    });
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  

  return (
    <section>
        <div className='container'>
        <nav>
        <FavoritesNavBar>
          
        </FavoritesNavBar>
      </nav>
      <div className='filter-container'>
        <label htmlFor='genre-select'>Filter by Genre: </label>
        <select id='genre-select' value={selectedGenre} onChange={handleGenreChange}>
          <option value=''>All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      
      <main className='basic-table '>
       
      <div className='anime-grid '>{createAnimeList()}</div>
      
      </main>
      
      </div>
    </section>
  );
}

export default Genres;
