import React from 'react';
import ReactPaginate from 'react-paginate';

/**
 * Pagination Component
 * - Handles the display and functionality of pagination controls.
 * 
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages available.
 * @param {function} onPageChange - Function to call when the page changes.
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={totalPages} // Total number of pages
      pageRangeDisplayed={2} // Number of page numbers to display around the current page
      marginPagesDisplayed={1} // Number of page numbers to display at the beginning and end
      onPageChange={(data) => onPageChange(data.selected + 1)} // Callback function when page changes
      containerClassName={'pagination'} // CSS class for pagination container
      activeClassName={'active'} // CSS class for active page
      previousLabel={'← Previous'} // Label for the previous page button
      nextLabel={'Next →'} // Label for the next page button
    />
  );
};

export default Pagination;
