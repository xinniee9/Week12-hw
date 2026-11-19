import { useCartStore } from '../stores/useCartStore'

function CartSummary() {
  const { cart } = useCartStore()
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.amount, 0)

  return (
    <div className="flex justify-between items-end border-t border-base-300 pt-4 mt-4">
      <span className="text-sm text-gray-500">รวมทั้งหมด {totalAmount} ชิ้น</span>
      <div className="text-right">
        <div className="text-xs text-gray-500">Total Price</div>
        <div className="text-2xl font-bold text-sky-600">฿{totalPrice.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default CartSummary