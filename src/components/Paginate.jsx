import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Paginate = ({ setCurrentPage, pageCount }) => {
  const handlePageClick = (event) => {
    window.scroll(0, 0)
    setCurrentPage(event.selected + 1)
  }

  return (
    <ReactPaginate
      // breakLabel='...'

      // Next Button
      nextLabel="next >"
      nextLinkClassName="px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-blue-600 hover:text-slate-900 border border-blue-600"
      nextClassName="hidden sm:block"


      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      pageCount={pageCount}

      // Previous Button
      previousLabel="< previous"
      previousLinkClassName="px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-blue-600 hover:text-slate-900 border border-blue-600"
      previousClassName="hidden sm:block"

      //Pagination container
      containerClassName="flex justify-center my-6 gap-3 text-blue-600 text-xs"


      //Pages
      activeLinkClassName="bg-blue-600 px-2 py-1 md:px-3 md:py-2 rounded-lg text-slate-900"
      pageLinkClassName="hover:text-slate-900 px-2 py-1 md:px-3 md:py-2 rounded-lg border border-blue-600 hover:bg-blue-600"

      // Previous nand next button
      disabledLinkClassName={
        'hover:cursor-not-allowed border border-transparent text-blue-900'
      }
    />
  )
}

Paginate.propTypes = {
  setCurrentPage: PropTypes.func,
  pageCount: PropTypes.number,
}

export default Paginate
