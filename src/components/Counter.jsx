const Counter = ({ quantity, decrement, increment }) => (
  <form className='mx-auto border border-gray-300 rounded-lg py-1 px-2'>
    <div className='relative flex items-center max-w-[8rem]'>
      <button
        type='button'
        id='decrement'
        data-input-counter-decrement='quantity-input'
        onClick={decrement}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M5 12h14'
          />
        </svg>
      </button>

      <input
        type='text'
        id='quantity-input'
        data-input-counter
        aria-describedby='helper-text-explanation'
        className='text-center text-sm w-4 mx-2'
        value={quantity}
        required
      />

      <button
        type='button'
        id='increment'
        data-input-counter-increment='quantity-input'
        onClick={increment}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      </button>
    </div>
  </form>
)

export default Counter
