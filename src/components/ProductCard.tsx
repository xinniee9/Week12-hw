import { Link } from 'react-router'
import type { Product } from '../types'
import { useCartStore } from '../stores/useCartStore'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartStore()
  const { id, name, description, price, image } = product

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      <Link to={`/product/${id}`}>
        <figure>
          <img src={image} alt={name} className="h-48 w-full object-cover" />
        </figure>
      </Link>
      <div className="card-body p-4">
        <h2 className="card-title text-base">
          <Link to={`/product/${id}`} className="hover:underline">{name}</Link>
        </h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="card-actions justify-between items-center mt-2">
          <span className="font-bold text-info">฿{price.toLocaleString()}</span>
          <button className="btn btn-secondary btn-sm" onClick={() => addToCart(product)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard