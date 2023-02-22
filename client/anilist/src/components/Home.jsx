import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import HeaderImg from '../assets/Header-1.jpg';
import FavoritesNavBar from './FavoritesNavBar'



function Home() {
  const navigate = useNavigate();

  const initialAnimeList = [    
    { id: 1, title: 'Death Note', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg' },    
    { id: 2, title: 'Ghost In The Shell', imageUrl: 'https://cdn.myanimelist.net/images/anime/10/82594.jpg' },    
    { id: 3, title: 'Gintama', imageUrl: 'https://cdn.myanimelist.net/images/anime/10/73274.jpg' },    
    { id: 4, title: 'Code Geass: Hangyaku no Lelouch', imageUrl: 'https://cdn.myanimelist.net/images/anime/5/50331.jpg' },    
    { id: 5, title: 'Spirited Away', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/79597.jpg' },    
    { id: 6, title: 'Blood C', imageUrl: 'https://cdn.myanimelist.net/images/anime/2/31649.jpg' },    
    { id: 7, title: 'Blood: The Last Vampire', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/18913.jpg' },    
    { id: 8, title: 'Vampire Hunter D: Bloodlust', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/21432.jpg' },    
    { id: 9, title: 'Parasyte: The Maxim', imageUrl: 'https://cdn.myanimelist.net/images/anime/3/73178.jpg' },    
    { id: 10, title: 'Another', imageUrl: 'https://cdn.myanimelist.net/images/anime/4/75509.webp' },    
    { id: 11, title: 'Hellsing Ultimate', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/7333.jpg' },
    { id: 12, title: 'Deadman Wonderland', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/75299.jpg' }
    ];
  
  const [animeList, setAnimeList] = useState(initialAnimeList);
  const [searchTerm, setSearchTerm] = useState('');
  
  const createAnimeList = () => {
    if (animeList.length === 0) {
      return <p>No anime found</p>;
    }
    return animeList.map(item => {
      return (
        <div key={item.id} className="anime-card">
          <img src={item.imageUrl} alt='' />
          {item.title && <h3>{item.title}</h3>}
        </div>
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
  
    const filteredList = initialAnimeList.filter(item => {
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
      {/* <div className=''><h1>Ani-List</h1></div> */}
      <header style={{ backgroundImage: `url(${HeaderImg})` }}></header>
        <div className='navbar-container'>
          {/* <nav className='Home-navbar-container'>
            <ul>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/favorites'>Genres</Link>
              </li>
              <li>
                <a onClick={() => navigate('/favorites')}>Favorites</a>
              </li>
              <li>
                <Link to='/trending'>Trending</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </nav> */}
          <nav>
        <FavoritesNavBar>
          
        </FavoritesNavBar>
      </nav>
          <form onSubmit={handleSearchSubmit}>
            <div className='search-container'>
              <input
                type='text'
                value={searchTerm}
                placeholder='Search for anime...'
                 onChange={handleSearchInputChange} />
                <button type='submit'>Search</button>
                </div>
                </form>
                
                <main className='anime-grid'>{createAnimeList()}</main>
                </div>
                </div>
                </section>
                
  )
}

export default Home
