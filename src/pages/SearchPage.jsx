

const SearchPage = () => {
  return (
    <section className="px-4 py-10">
      <div className="container m-auto flex justify-center">
        <div className='w-[70%]'>
          <h2 className="text-4xl font-bold mb-5 text-center">SEARCH FOR MOVIE / TV SHOW</h2>
          <input type="text" placeholder="Search" id="search" className="bg-transparent text-slate-800 border  border-slate-800 focus:border-blue-600 px-6 py-2 rounded-full text-sm md:text-base lg:w-full " />


        </div>
      </div>
    </section>
  )
}

export default SearchPage