import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../constant/env.const';

const Languages = ({ setSelectedLanguage }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data: languagesData } = await axios.get(`${API_URL}/filter/languages`);
        setLanguages(languagesData);
      } catch (error) {
        console.error('Error fetching movie data: ', error);
      }
    }
    fetchCountries();
  }, []);


  return (
    <div className='space-y-2'>
      <h1 className='md:text-lg'>Language</h1>
      <div className='border border-blue-600 p-3 rounded-lg h-80 overflow-y-auto scrollbar-custom'>
        {languages.sort((a, b) => {
          if (a.english_name < b.english_name) {
            return -1;
          }
          if (a.english_name > b.english_name) {
            return 1;
          }
          return 0;
        })
          .map((language) =>
            <label key={language.iso_639_1} className='inline-flex items-center gap-2 mr-4'>
              <input
                type='radio'
                name='language'
                value={language.iso_639_1}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className='accent-blue-600 focus:ring-0 focus:ring-offset-0 rounded-full cursor-pointer'
              />
              {language.english_name}
            </label>
          )}
      </div>
    </div>
  )
}

Languages.propTypes = {
  setSelectedLanguage: PropTypes.func.isRequired
}

export default Languages