import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import HeaderImg from '../assets/Header-1.jpg';
import FavoritesNavBar from './FavoritesNavBar'
import AnimePage from './AnimePage';
import HomePagination from './HomePagination';
// import FavoritesListPagination from './FavoritesListPagination';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';




function Home({animeList, setAnimeList}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    const sortedList = animeList.slice().sort((a, b) => a.title.localeCompare(b.title))
    setAnimeList(sortedList)
    // createAnimeList()
    // console.log(animeList)
  }, [animeList, setAnimeList])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAnimeList = animeList.slice(indexOfFirstItem, indexOfLastItem);
  
  
  const createAnimeList = () => {
    if (currentAnimeList.length === 0) {
      return <p>No anime found</p>;
    }
  

    return currentAnimeList.map(item => {
      return (
        <Link to={`/anime/${item.id}`}
         key={item.id} className="anime-card">
          <img src={item.imageUrl} alt='' />
          {item.title && <h3>{item.title}</h3>}
          
        </Link>
      );
    });
  };

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");

    if (confirmed) {
      navigate('/login');
    }
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
  
    const filteredList = animeList.filter(item => {
      // Combine all searchable fields into a single string
      const searchFields = [
        item.title,
        item.description,
        item.genre,
        item.rating
      ].join(' ').toLowerCase();
  
      // Check if the search term is contained in the searchable fields
      return searchFields.includes(searchTerm.toLowerCase());
    });
  
    setAnimeList(filteredList);
  };
  
  const handleSearchInputChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <section>
      <div className='container'>
      <header style={{ backgroundImage: `url(${HeaderImg})` }}></header>
        <div className='navbar-container'>
         
          <nav>
        <FavoritesNavBar>
          
        </FavoritesNavBar>
      </nav>
          <form onSubmit={handleSearchSubmit}>
            <div className='search-container'>
              <input
              className='home-input'
                type='text'
                value={searchTerm}
                placeholder='Search anime...'
                 onChange={handleSearchInputChange} />
                
                </div>
                </form>
                
                <main className='anime-grid'>
                
                  {createAnimeList()}
                  </main>
                </div>
                </div>
                <div>
                  <HomePagination
                  // className='home-pagination-container'
                  currentAnimeList={currentAnimeList}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={animeList.length}
                  paginate={paginate}
                  ></HomePagination>
                </div>
                </section>
                
  )
}

export default Home
