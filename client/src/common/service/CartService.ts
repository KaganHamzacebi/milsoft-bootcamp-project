import type { Cart, Checkout } from '../types/Types';
import { CartMicroservice } from './microservices/CartMicroservice';
import axios from 'axios';

export class CartService extends CartMicroservice {
  public readonly url: string;
  private readonly path: string;

  constructor() {
    super();
    this.path = '/cart';
    this.url = this.baseUrl + this.path;
  }

  async checkout(checkoutDto: Checkout): Promise<Cart> {
    const res = await axios.post(this.url + '/checkout', checkoutDto);
    return res.data;
  }
}