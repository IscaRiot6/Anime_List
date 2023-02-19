import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function FavoritesListPagination({ itemsPerPage, list, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className='pagination' size='sm'>
      {pageNumbers.map((number) => (
        <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export default FavoritesListPagination;