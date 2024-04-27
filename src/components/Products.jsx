import Item from './Item'
import Search from './Search'

const Products = ({ products, handleChanges }) => (
  <div className='p-5 rounded-t-3xl absolute top-24 left-0 right-0 bottom-0 bg-white'>
    <div className='pb-2'>
      <h2 className='font-semibold capitalize'>produk</h2>

      <p>
        <span className='capitalize'>ditemukan</span> 100 jenis
      </p>
    </div>

    <Search />

    {products.map((product, idx) => (
      <Item
        key={product.name}
        code={product.code}
        name={product.name}
        price={product.price}
        image={product.image}
        quantity={product.qty}
        setQuantity={(newQty) => handleChanges(idx, newQty)}
      />
    ))}
  </div>
)

export default Products
