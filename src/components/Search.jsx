const Search = () => (
  <form className='flex items-center max-w-lg mx-auto my-2'>
    <label className='sr-only'>search</label>

    <div className='relative w-full'>
      <input
        type='text'
        id='product-search'
        className='border border-gray-300 text-gray-900 rounded-lg h-9 w-full px-4 py-2'
        placeholder='Masukan kode PO...'
        required
      />

      <button
        type='button'
        className='absolute inset-y-0 end-0 flex items-center pe-3'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>
      </button>
    </div>
  </form>
)

export default Search
