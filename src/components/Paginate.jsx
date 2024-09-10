import ReactPaginate from 'react-paginate'
// import { useState } from 'react'
import PropTypes from 'prop-types'

const Paginate = ({ setCurrentPage, pageCount = 50 }) => {


  const handlePageClick = (event) => {
    window.scroll(0, 0);
    setCurrentPage(event.selected + 1);
  };


  return (
    <ReactPaginate
      // breakLabel='...'
      nextLabel="next >"
      nextLinkClassName=" px-3 py-2 rounded-lg hover:bg-blue-400 hover:text-white"
      nextClassName=" hidden sm:block"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel="< previous"
      previousLinkClassName='px-3 py-2 rounded-lg hover:bg-blue-400 hover:text-white'
      previousClassName='hidden sm:block'
      renderOnZeroPageCount={null}
      containerClassName='flex space-x-5 justify-center my-6'
      pageLinkClassName='hover:bg-blue-400 hover:text-white px-2 sm:px-3 py-2 rounded-lg'
      // pageClassName=''
      activeLinkClassName='bg-blue-400 px-3 py-2 rounded-lg text-white'
      disabledLinkClassName={'hover:cursor-not-allowed hover:bg-white hover:text-black'}
    // className=' w-full'
    />
  )
};

Paginate.propTypes = {
  setCurrentPage: PropTypes.func,
  pageCount: PropTypes.number
}

export default Paginate