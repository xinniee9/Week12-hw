import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-8xl font-extrabold text-secondary">404</h1>
      <p className="text-2xl font-bold mt-4">Page Not Found</p>
      <p className="text-sm text-gray-500 mt-1">ไม่พบหน้าที่คุณต้องการ</p>
      <Link to="/" className="btn btn-secondary mt-6">กลับหน้าแรก</Link>
    </div>
  )
}

export default NotFoundPage