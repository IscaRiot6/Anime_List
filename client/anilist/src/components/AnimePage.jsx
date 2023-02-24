import React from 'react';
import { useParams } from 'react-router-dom';



function AnimePage({ initialAnimeList }) {
  const { id } = useParams();
//   const anime = initialAnimeList.find(item => item.id === Number(id))
const anime = initialAnimeList ? initialAnimeList.find(item => item.id === Number(id)) : null;

    if (!anime) {
        return <div>Anime not found</div>
    }


  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.imageUrl} alt='' />
      {/* Add more anime details here */}
    </div>
  );
}

export default AnimePage