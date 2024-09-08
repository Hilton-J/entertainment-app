import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Paginate = ({ handlePageClick, pageCount }) => {


  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel="next >"
      nextLinkClassName=" px-3 py-2 rounded-lg hover:bg-blue-400 hover:text-white"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      previousLinkClassName='px-3 py-2 rounded-lg hover:bg-blue-400 hover:text-white'
      renderOnZeroPageCount={null}
      containerClassName='flex space-x-5 justify-center my-6'
      pageLinkClassName='hover:bg-blue-400 hover:text-white px-3 py-2 rounded-lg'
      activeLinkClassName='bg-blue-400 px-3 py-2 rounded-lg text-white'
      disabledLinkClassName={'hover:cursor-not-allowed hover:bg-white hover:text-black'}
    />
  )
};



export default Paginate