import React from "react";
import { range } from "lodash";

const Pagination = ({
  totalCourses,
  perPage,
  currentPage,
  handlePageChange,
}) => {
  // tedade safhe ha mosavi bashe ba hasele taghsime 
  // kole dore ha bar tedade dore haii ke mikhaiim to ye safhe bashe
  // age faghat ye safhe bood niazi be pagination nadarim
  const paging = Math.ceil(totalCourses / perPage);
  if (paging === 1) return null;
  const pages = range(1, paging + 1);

  return (
    <nav aria-label='Page navigation'>
      <ul className='pagination justify-content-center'>
        {pages.map((page) => (
          <li key={page}>
            <button
              className={
                page === currentPage
                  ? "page-item btn btn-success"
                  : "page-item btn"
              }
              style={{ cursor: "pointer" }}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
