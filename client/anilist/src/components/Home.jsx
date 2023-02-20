import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import HeaderImg from '../assets/Header-1.jpg'

function Home() {
    const navigate = useNavigate();

    const createAnimeList = () => {
      const initialList = [
        { id: 1, title: 'Anime 1', imageUrl: '' },
        { id: 2, title: 'Anime 2', imageUrl: '' },
        { id: 3, title: 'Anime 3', imageUrl: '' },
        { id: 4, title: 'Anime 4', imageUrl: '' },
        { id: 5, title: 'Anime 5', imageUrl: '' },
        { id: 6, title: 'Anime 6', imageUrl: '' },
        { id: 7, title: 'Anime 7', imageUrl: '' },
        { id: 8, title: 'Anime 8', imageUrl: '' },
        { id: 9, title: 'Anime 9', imageUrl: '' },
        { id: 10, title: 'Anime 10', imageUrl: '' },
        { id: 11, title: 'Anime 11', imageUrl: '' }
      ];
      return initialList.map(item => {
        return (
          <div key={item.id}>
            <img src={item.imageUrl} alt='' />
            <h1>{item.title}</h1>
          </div>
        );
      });
    };

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to log out?");

        if(confirmed) {
        navigate('/login')
    }
}
  
    return (
    <section>
      <header style={{ backgroundImage: `url(${HeaderImg})` }}>
        <div className='navbar-container'>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/anilist'>Favourites</Link>
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
          </nav>
          <main>{createAnimeList()}</main>
        </div>
      </header>
    </section>
    );
  }


export default Home