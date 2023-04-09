interface Category {
  categoryId: number;
  categoryName: string;
  productList: Product[];
  imagePath: string;
}

interface Product {
  productId: number;
  productName: string;
  salesPrice: number;
  categoryId: number;
  imagePath: string;
}

interface Cart {
  cartId: number;
  customerName: string;
  cardNumber: number;
  cartStatus: CartStatus;
  productList: Product[]
}


interface CartProduct {
  cartProductId?: number;
  product: Product;
  salesQuantity?: number;
}

interface Checkout {
  customerName: string;
  cardNumber: number;
  productList: CartProduct[]
}

// eslint-disable-next-line no-shadow
enum CartStatus {
  NEW = 'NEW',
  COMPLETED = 'COMPLETED'
}

export type { Category, Product, Cart, CartProduct, CartStatus, Checkout };