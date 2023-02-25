import React from 'react';
import { useParams } from 'react-router-dom';
// import DataBase from './Data/data'
import FavoritesNavBar from './FavoritesNavBar'
import HomeButton from './HomeButton';



function AnimePage({ animeList }) {
  const { id } = useParams();
//   const anime = initialAnimeList.find(item => item.id === Number(id))
// const anime = initialAnimeList ? initialAnimeList.find(item => item.id === Number(id)) : null;
const anime = animeList.find(item => item.id === Number(id));

    if (!anime) {
        return <div>Anime not found</div>
    }


  return (
    <section>
      <nav>
        <HomeButton>
          
        </HomeButton>
      </nav>
    
    <div className='container'>
      {/* <nav>
        <FavoritesNavBar>
          
        </FavoritesNavBar>
      </nav> */}
      {/* <nav>
        <HomeButton>

        </HomeButton>
      </nav> */}
      <main className='anime-table'>
      <table className='basic-table'>
      <h1>{anime.title}</h1>
      <p>{anime.description} </p>
      <p>{anime.genre}</p>
      <img src={anime.imageUrl} alt='' />
      {/* Add more anime details here */}
      </table>
      </main>
      
    </div>
    </section>
  );
}

export default AnimePage