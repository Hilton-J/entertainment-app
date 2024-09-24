import ReactPaginate from 'react-paginate'
// import { useState } from 'react'
import PropTypes from 'prop-types'

const Paginate = ({ setCurrentPage, pageCount = 50 }) => {
  const handlePageClick = (event) => {
    window.scroll(0, 0)
    console.log(event.selected)
    setCurrentPage(event.selected + 1)
  }

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
      previousLinkClassName="px-3 py-2 rounded-lg hover:bg-blue-400 hover:text-white"
      previousClassName="hidden sm:block"
      containerClassName="flex justify-center my-6 gap-3"
      pageLinkClassName="hover:bg-blue-400 hover:text-white px-3 py-2 rounded-lg"
      activeLinkClassName="bg-blue-400 px-3 py-2 rounded-lg text-white"
      disabledLinkClassName={
        'hover:cursor-not-allowed hover:bg-white hover:text-black'
      }
    />
  )
}

Paginate.propTypes = {
  setCurrentPage: PropTypes.func,
  pageCount: PropTypes.number,
}

export default Paginate
