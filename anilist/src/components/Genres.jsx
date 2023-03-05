  import { Link } from 'react-router-dom';
  import React, { useState } from 'react';
  import FavoritesNavBar from './FavoritesNavBar'
  import HomePagination from './HomePagination';

  function Genres({ animeList }) {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;



    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const allGenres = animeList.flatMap((anime) => {
      return anime.genre ? anime.genre.split('/').map((genre) => genre.trim()) : [];
      });
    const uniqueGenres = [...new Set(allGenres)].sort();



    const filteredAnimeList = animeList.filter((anime) => {
    return selectedGenre ? anime.genre && anime.genre.includes(selectedGenre) : true;
    });

    const currentItems = filteredAnimeList.slice(indexOfFirstItem, indexOfLastItem)

    

    const createAnimeList = () => {
      if (currentItems.length === 0) {
        return <p>No anime found</p>;
      }

      const sortedItems = currentItems.sort((a, b) => a.title.localeCompare(b.title));

      return sortedItems.map((item) => {
        return (
          <Link to={`/anime/${item.id}`} key={item.id} className='anime-card'>
            <img src={item.imageUrl} alt='' />
            {item.title && <h3>{item.title}</h3>}
            <p>{item.genre}</p>
          </Link>
        );
      });
    };

    const handleGenreChange = (event) => {
      setSelectedGenre(event.target.value);
      setCurrentPage(1);
    };

    

    return (
      <section>
          <div className='container'>
              <nav>
                  <FavoritesNavBar>
            
                  </FavoritesNavBar>
              </nav>
              <div>
              <label htmlFor='genre-select'>Choose a Genre: </label>
              </div>
              <div className='filter-container'>
                  {/* <label htmlFor='genre-select'>Choose a Genre: </label>                 */}
                  
                  <select id='genre-select' value={selectedGenre} onChange={handleGenreChange}>
                  <option value=''>All</option>
                  {uniqueGenres.map((genre) => (
                  <option key={genre} value={genre}>
                  {genre}
                  </option>
                  ))}
                  </select>
              </div>
        
              <main className='basic-table '>
        
                  <div className='anime-grid '>{createAnimeList()}</div>
        
              </main>
              <footer>
                  <HomePagination
                      itemsPerPage={itemsPerPage}
                      totalItems={filteredAnimeList.length}
                      paginate={paginate}
                      currentPage={currentPage}
                  />
              </footer>
        
          </div>
      </section>
    );
  }

  export default Genres;
