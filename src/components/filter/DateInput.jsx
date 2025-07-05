import React from 'react'
import PropTypes from 'prop-types'

const DateInput = ({ name, value, labelText, onChangeFunc }) => {
  return (
    <div className='space-y-2'>
      <label htmlFor={name}>{labelText}</label>
      <input
        type='date'
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChangeFunc(e.target.value)}
        className='w-full py-1 rounded-lg cursor-pointer focus:ring-0 text-slate-900'
      />
    </div>
  )
}

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default DateInput