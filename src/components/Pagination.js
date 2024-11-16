import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPaginationItems = () => {
    const items = [];

    // Previous Button
    items.push(
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`} key="prev">
        <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </button>
      </li>
    );

    // First Page
    if (currentPage > 2) {
      items.push(
        <li className="page-item" key={1}>
          <button className="page-link" onClick={() => onPageChange(1)}>
            1
          </button>
        </li>
      );
      if (currentPage > 3) {
        items.push(
          <li className="page-item disabled" key="dots-left">
            <span className="page-link">...</span>
          </li>
        );
      }
    }

    // Middle Pages
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <li
          className={`page-item ${i === currentPage ? "active" : ""}`}
          key={i}
        >
          <button className="page-link" onClick={() => onPageChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    // Last Page
    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        items.push(
          <li className="page-item disabled" key="dots-right">
            <span className="page-link">...</span>
          </li>
        );
      }
      items.push(
        <li className="page-item" key={totalPages}>
          <button className="page-link" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </button>
        </li>
      );
    }

    // Next Button
    items.push(
      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} key="next">
        <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      </li>
    );

    return items;
  };

  return (
    <nav className="mt-2">
      <ul className="pagination justify-content-center">{getPaginationItems()}</ul>
    </nav>
  );
};

export default Pagination;
