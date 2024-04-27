import Counter from './Counter'

const Item = ({ image, code, name, price, quantity, setQuantity }) => {
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  return (
    <>
      <div className='flex items-center  justify-between p-2 h-28'>
        <div className='w-20 self-start'>
          <img
            className='w-full'
            src={image}
            alt='product-image'
          />
        </div>

        <div className='flex flex-col justify-between grow mx-4'>
          <p className='mb-1 font-light text-muted'>{code}</p>

          <p className='mb-1'>{name}</p>

          <p>
            <span className='capitalize'>rp</span>
            {price}/<span className='text-muted'>krat</span>
          </p>
        </div>

        <div className='self-end'>
          {quantity === 1 ? (
            <Counter
              quantity={quantity}
              decrement={handleDecrement}
              increment={handleIncrement}
            />
          ) : (
            <button
              type='button'
              className='text-white rounded-xl text-sm px-4 py-2 bg-secondary capitalize'
              onClick={handleIncrement}
            >
              beli
            </button>
          )}
        </div>
      </div>

      <hr className='border-t-2 border-dashed border-gray-300 mb-4' />
    </>
  )
}

export default Item
