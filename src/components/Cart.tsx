import { Link } from 'react-router'
import { useCartStore } from '../stores/useCartStore'
import CartItemRow from './CartItemRow'
import CartSummary from './CartSummary'

function Cart() {
  const { cart, clearCart } = useCartStore()

  const handleCheckout = () => {
    alert('ชำระเงินเรียบร้อยแล้ว')
    clearCart()
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3">
        Product Cart
        {cart.length > 0 && <span className="badge badge-secondary">{cart.length} รายการ</span>}
      </h2>

      <div className="card bg-base-100 shadow-md p-6">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-12 text-gray-500">
            <span className="text-6xl">🛒</span>
            <p>กรุณาเลือก Product</p>
            <Link to="/" className="btn btn-secondary btn-sm mt-2">เลือกสินค้า</Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-base-300">
              {cart.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>
            <CartSummary />
            <button className="btn btn-secondary w-full mt-4" onClick={handleCheckout}>
              ชำระเงิน
            </button>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart