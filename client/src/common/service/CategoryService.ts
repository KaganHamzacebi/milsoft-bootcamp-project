import type { Category, Product } from '../types/Types';
import { ProductMicroservice } from './microservices/ProductMicroservice';
import axios from 'axios';

export class CategoryService extends ProductMicroservice {
  public readonly url: string;
  private readonly path: string;

  constructor() {
    super();
    this.path = '/category';
    this.url = this.baseUrl + this.path;
  }

  async listCategories(): Promise<Category[]> {
    const res = await axios.get(this.url + '/list');
    return res.data;
  }

  async getProductsByCategoryId(categoryId: string): Promise<Product[]> {
    const res = await axios.get(this.url + '/products/' + categoryId);
    return res.data;
  }

}