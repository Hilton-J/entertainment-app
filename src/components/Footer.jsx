import React from 'react';
import { FiTv, FiTrendingUp, FiYoutube } from "react-icons/fi";
import { RiMovie2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FiYoutube className="h-8 w-8 text-red-500" />
              <h3 className="text-2xl font-bold text-white">CineScope</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Discover the latest trending movies and TV shows. Your ultimate destination for entertainment powered by The Movie Database (TMDB).
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <FiTrendingUp className="h-4 w-4" />
                <span>Real-time trending data</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex justify-end'>
            <div>
              <h4 className="text-white font-semibold mb-4">Browse</h4>
              <ul className="space-y-2">
                <li>
                  <Link to={'/'} className="text-gray-400 hover:text-blue-600 transition-colors flex items-center space-x-2">
                    <FiTrendingUp className="h-4 w-4" />
                    <span>Trending</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/movies'} className="text-gray-400 hover:text-blue-600 transition-colors flex items-center space-x-2">
                    <RiMovie2Line className="h-4 w-4" />
                    <span>Movies</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/tv'} className="text-gray-400 hover:text-blue-600 transition-colors flex items-center space-x-2">
                    <FiTv className="h-4 w-4" />
                    <span>TV Shows</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} CineScope. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Powered by{' '}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 transition-colors"
              >
                The Movie Database (TMDB)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer