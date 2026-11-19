export interface Product {
  id: number
  image: string
  name: string
  description: string
  price: number
}

export interface CartItem extends Product {
  amount: number 
}