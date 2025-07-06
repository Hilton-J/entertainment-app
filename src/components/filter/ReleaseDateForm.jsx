import React from 'react'
import DateInput from './DateInput'
import PropTypes from 'prop-types'

const ReleaseDateForm = ({ toDate, setToDate, fromDate, setFromDate }) => {
  return (
    <div className='mt-4 flex flex-col gap-3'>
      <DateInput labelText='From Date' name='fromDate' value={fromDate} onChangeFunc={setFromDate} />
      <DateInput labelText='To Date' name='toDate' value={toDate} onChangeFunc={setToDate} />
    </div>
  )
}

ReleaseDateForm.propTypes = {
  toDate: PropTypes.string.isRequired,
  setToDate: PropTypes.func.isRequired,
  fromDate: PropTypes.string.isRequired,
  setFromDate: PropTypes.func.isRequired,
}

export default ReleaseDateForm