import type { Product } from '../types/Types';
import { ProductMicroservice } from './microservices/ProductMicroservice';
import axios from 'axios';

export class ProductService extends ProductMicroservice {
  public readonly url: string;
  private readonly path: string;

  constructor() {
    super();
    this.path = '/product';
    this.url = this.baseUrl + this.path;
  }

  async listProducts(): Promise<Product[]> {
    const res = await axios.get(this.url + '/list');
    return res.data;
  }

  async getProductById(id: number): Promise<Product> {
    const res = await axios.get(this.url + '/' + id);
    return res.data;
  }

}