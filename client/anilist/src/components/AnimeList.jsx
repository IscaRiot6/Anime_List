import React from 'react';

function AnimeList({ animeList, currentPage, itemsPerPage }) {
  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the items for the current page using the slice method
  const currentItems = animeList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {currentItems.map((anime) => (
        <div key={anime.id}>
          <h2>{anime.title}</h2>
          <p>{anime.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AnimeList;
