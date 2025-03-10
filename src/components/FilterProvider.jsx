'use client'

import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types'
import { GenreContext } from '../contexts/GenreContext'
import { filters } from '../data/objects'
import FilterProviderHeader from './FilterProviderHeader'

// const sortSections = [
//   { name: 'Most Popular', href: '#', current: true },
//   { name: 'Best Rating', href: '#', current: false },
//   { name: 'Newest', href: '#', current: false },
//   { name: 'Price: Low to High', href: '#', current: false },
//   { name: 'Price: High to Low', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function FilterProvider({ children, type, setSearchQuery }) {
  const { tvGenres, movieGenres, selectedGenres, setSelectedGenres } =
    useContext(GenreContext)
  const [selected, setSelected] = useState('polularity.desc');
  // const [selectedGenres, setSelectedGenres] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filter, setFilter] = useState(filters)

  useEffect(() => {
    setFilter((prevFilter) =>
      prevFilter.map((filt) =>
        filt.id === type ?
          {
            ...filt,
            genres: type === 'movies' ? movieGenres : tvGenres,
          } :
          filt
      )
    )
  }, [type]);

  const handleSelected = (e) => {
    const genreId = parseInt(e.target.id)

    if (e.target.checked) {
      setSelectedGenres((prevSelectedGenres) => [
        ...prevSelectedGenres,
        genreId,
      ])
    } else {
      setSelectedGenres((prevSelectedGenres) =>
        prevSelectedGenres.filter((id) => id !== genreId),
      )
    }
  }

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      {/* ================================================== MOBILE FILTER START ================================================= */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span className="no-sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200">
              {filters.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {/* {section.sections.map((section, sectionIdx) => (
                        <div key={section.value} className="flex items-center">
                          <input
                            defaultValue={section.value}
                            defaultChecked={section.checked}
                            id={`filter-mobile-${section.id}-${sectionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-mobile-${section.id}-${sectionIdx}`}
                            className="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            {section.label}
                          </label>
                        </div>
                      ))} */}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>
      {/* ================================================== MOBILE FILTER END ================================================= */}


      <main className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
        {/* Main container starts */}
        <FilterProviderHeader type={type} filter={filter} setSearchQuery={setSearchQuery} selected={selected} setSelected={setSelected} />
        {/* <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="w-3/5 rounded-full border border-slate-800 bg-transparent px-6 py-2 text-sm text-slate-800 focus:border-blue-600 focus:outline-none md:text-base"
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 px-5"
              >
                <div className="py-1 flex flex-col">
                  {filter.map((fit) => (
                    fit.id === type && fit.sort.map((sort, index) =>
                    
                    
                    fit.sort.map((sort, index) =>
                      <MenuItem key={index}>
                        <a
                          href={''}
                        >
                          {sort.label}
                        </a>
                      </MenuItem>
                    )
                  ))}
                </div>
              </MenuItems>
            </Menu>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon
                aria-hidden="true"
                className="h-5 w-5 text-slate-900"
              />
            </button>
          </div>
        </div> */}

        {/* Sidebar  */}
        <section aria-labelledby="products-heading" className="pb-24 min-h-screen">
          <div className="grid gap-x-[2%] lg:grid-cols-[16%_82%]">
            {/* Sidebar Filters */}
            <form className="hidden lg:block">
              {/* Categories */}

              <Disclosure as="div" className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Genres</span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-5 w-5 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </h3>

                {type === 'movies'
                  ? movieGenres.map((section, sectionIdx) => (
                    <DisclosurePanel className="pt-6" key={section.id}>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            defaultValue={section.value}
                            checked={selectedGenres.includes(section.id)}
                            id={section.id}
                            name={section.name}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            onChange={handleSelected}
                          />
                          <label
                            htmlFor={`filter-${section.id}-${sectionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {section.name}
                          </label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  ))
                  : tvGenres.map((section, sectionIdx) => (
                    <DisclosurePanel className="pt-6" key={section.id}>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            defaultValue={section.value}
                            id={section.id}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            onChange={handleSelected}
                          />
                          <label
                            htmlFor={`filter-${section.id}-${sectionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {section.name}
                          </label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  ))}
              </Disclosure>
            </form>

            {/* Shows grid */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-6">
              {children}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

FilterProvider.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  setSearchQuery: PropTypes.func,
}
