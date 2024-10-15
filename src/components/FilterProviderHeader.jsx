import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuButton, MenuItems, RadioGroup, Field, Label, Radio } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const FilterProviderHeader = ({ type, filter, setSearchQuery, selected, setSelected }) => {


  console.log(selected);
  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
      {/* <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-3xl">
            New Arrivals
          </h1> */}

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
            className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 px-5"
          >

            <RadioGroup className="py-1 flex flex-col" value={selected} onChange={setSelected} aria-label="Server size">
              {filter.map((fit) => (
                fit.id === type && fit.sort.map((sort, index) =>
                  <Field key={index} className="flex items-center gap-2">
                    <Radio
                      value={sort.value}
                      className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-600 data-[disabled]:bg-gray-100"
                    >
                      <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                    </Radio>
                    <Label className="data-[disabled]:opacity-50">{sort.label}</Label>
                  </Field>
                )
              ))}
            </RadioGroup>
          </MenuItems>
        </Menu>

        {/* <button
          type="button"
          onClick={() => setMobileFiltersOpen(true)}
          className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
        >
          <span className="sr-only">Filters</span>
          <FunnelIcon
            aria-hidden="true"
            className="h-5 w-5 text-slate-900"
          />
        </button> */}
      </div>
    </div>
  )
};

FilterProviderHeader.propTypes = {
  type: PropTypes.string,
  setSearchQuery: PropTypes.func,
  filter: PropTypes.array,
  selected: PropTypes.string,
  setSelected: PropTypes.func
}

export default FilterProviderHeader