import React from "react";
import "../styles/Pagination.css";

function Pagination({ currentPage, pageCount, onChange }) {
  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  const pageButtons = [];

  const minPage = Math.max(1, currentPage - 2);
  const maxPage = Math.min(pageCount, currentPage + 2);

  if (currentPage > 1) {
    pageButtons.push(
      <button key="prev" onClick={(event) => handlePageChange(event, currentPage - 1)}>
        Prev
      </button>
    );
  }

  for (let i = minPage; i <= maxPage; i++) {
    pageButtons.push(
      <button key={i} className={i === currentPage ? "active" : ""} onClick={(event) => handlePageChange(event, i)}>
        {i}
      </button>
    );
  }

  if (currentPage < pageCount) {
    pageButtons.push(
      <button key="next" onClick={(event) => handlePageChange(event, currentPage + 1)}>
        Next
      </button>
    );
  }

  return <div className="pagination">{pageButtons}</div>;
}

export default Pagination;