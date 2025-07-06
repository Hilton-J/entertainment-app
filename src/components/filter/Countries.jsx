import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'

const Countries = ({ setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data: countriesData } = await axios.get('api/filter/countries');
        setCountries(countriesData);
      } catch (error) {
        console.error('Error fetching movie data: ', error);
      }
    }
    fetchCountries();
  }, []);


  return (
    <div className='space-y-2'>
      <h1 className='md:text-lg'>Country</h1>
      <div className='border border-blue-600 p-3 rounded-lg h-80 overflow-y-auto scrollbar-custom'>
        {countries.sort().map((country) =>
          <label key={country.iso_3166_1} className='inline-flex items-center gap-2 mr-4'>
            <input
              type='radio'
              name='country'
              value={country.iso_3166_1}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className='accent-blue-600 focus:ring-0 focus:ring-offset-0 rounded-full cursor-pointer'
            />
            {country.english_name}
          </label>
        )}
      </div>
    </div>
  )
}

Countries.propTypes = {
  setSelectedCountry: PropTypes.func.isRequired
}

export default Countries