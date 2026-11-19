import { NavLink } from 'react-router'
import { useCartStore } from '../stores/useCartStore'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'font-semibold text-secondary border-b-2 border-secondary pb-0.5'
    : 'text-gray-600 hover:text-secondary pb-0.5'

function Navbar() {
  const { cart } = useCartStore()

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold">My Shop</span>
        <div className="flex items-center gap-6">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/cart" className={linkClass}>
            <span className="inline-flex items-center gap-1.5">
              Cart
              {cart.length > 0 && <span className="badge badge-secondary badge-sm">{cart.length}</span>}
            </span>
          </NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar