import React from 'react';
const Pagination = ({ currentPage, setCurrentPage, totalEvents, eventPerPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalEvents / eventPerPage);
  const pagesToShow = 4;


  if (totalPages <= pagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= halfPages) {
      startPage = 1;
      endPage = pagesToShow;
    } else if (currentPage + halfPages >= totalPages) {
      startPage = totalPages - pagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfPages;
      endPage = currentPage + halfPages;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(totalPages);
  };
  
  return (
    <div>Pagination</div>
  );
}

export default Pagination;
