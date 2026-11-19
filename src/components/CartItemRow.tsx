import type { CartItem } from '../types'
import { useCartStore } from '../stores/useCartStore'

interface CartItemRowProps {
  item: CartItem
}

function CartItemRow({ item }: CartItemRowProps) {
  const { changeAmount, removeFromCart } = useCartStore()

  return (
    <div className="flex flex-wrap items-center gap-4 py-3">
      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />

      <div className="flex-1 min-w-40">
        <div className="font-bold">{item.name}</div>
        <div className="text-sm text-gray-500 line-clamp-1">{item.description}</div>
        <div className="text-sm font-semibold text-sky-600">฿{item.price.toLocaleString()}</div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="btn btn-circle btn-sm"
          disabled={item.amount <= 1}
          onClick={() => changeAmount(item.id, item.amount - 1)}
        >
          −
        </button>
        <input
          type="number"
          min={1}
          value={item.amount}
          onChange={(e) => changeAmount(item.id, Number(e.target.value))}
          className="input input-bordered input-sm w-16 text-center"
        />
        <button
          className="btn btn-circle btn-sm"
          onClick={() => changeAmount(item.id, item.amount + 1)}
        >
          +
        </button>
      </div>

      <div className="w-24 text-right font-bold">
        ฿{(item.price * item.amount).toLocaleString()}
      </div>

      <button className="btn btn-ghost btn-sm" onClick={() => removeFromCart(item.id)}>
        🗑️
      </button>
    </div>
  )
}

export default CartItemRow