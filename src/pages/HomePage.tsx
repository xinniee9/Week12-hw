import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">My Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  )
}

export default HomePage