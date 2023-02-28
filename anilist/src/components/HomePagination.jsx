// import React from 'react';

// function HomePagination({ itemsPerPage, totalItems, paginate }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className='pagination-wrapper'>
//         {pageNumbers.map(number => (
//           <li key={number} className='page-item'>
//             <button onClick={() => paginate(number)} className='page-link'>
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default HomePagination;

import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function HomePagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pagination className="home-pagination-container">
        <Pagination.First
          disabled={currentPage === 1}
          onClick={() => paginate(1)}
        />
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        />
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
          onClick={() => paginate(currentPage + 1)}
        />
        <Pagination.Last
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
          onClick={() => paginate(Math.ceil(totalItems / itemsPerPage))}
        />
      </Pagination>
    </nav>
  );
}

export default HomePagination;
