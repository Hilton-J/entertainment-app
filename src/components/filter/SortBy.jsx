import React from 'react'
import PropTypes from 'prop-types';
import { sortArray } from '../../data/objects';

const SortBy = ({ sort, setSort }) => {
  return (
    <div className='space-y-2'>
      <h1 className='md:text-lg'>Sort By</h1>
      {sortArray.map((s) =>
        <button
          key={s.value}
          className={`${s.value === sort ? "bg-transparent text-blue-600 border-blue-600" : "bg-blue-600 text-slate-900 border-transparent"} hover:text-blue-600 px-5 py-1 rounded-lg border hover:border-blue-600 hover:bg-transparent transition-all duration-300 w-full `}
          onClick={() => setSort(s.value)}
        >
          {s.label}
        </button>
      )}
    </div >
  )
}

SortBy.propTypes = {
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default SortBy