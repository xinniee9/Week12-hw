import { Link, useParams } from 'react-router'
import { products } from '../data/products'
import { useCartStore } from '../stores/useCartStore'

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCartStore()

  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-xl mb-4">ไม่พบสินค้า</p>
        <Link to="/" className="btn btn-secondary">กลับหน้าแรก</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/" className="text-sm hover:underline">← กลับไปหน้าสินค้า</Link>
      <div className="card lg:card-side bg-base-100 shadow-md mt-4 overflow-hidden">
        <figure className="lg:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-full max-h-96 object-cover" />
        </figure>
        <div className="card-body lg:w-1/2 justify-between">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-500 mt-2">{product.description}</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary mb-4">฿{product.price.toLocaleString()}</p>
            <div className="flex gap-2">
              <button className="btn btn-secondary" onClick={() => addToCart(product)}>Add to Cart</button>
              <Link to="/cart" className="btn btn-outline">ไปที่ตะกร้า</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage