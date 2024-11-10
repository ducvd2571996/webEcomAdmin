export interface Product {
  productId: number;
  name: string;
  image: string;
  categoryId: number;
  price: number;
  tax: number;
  description: string;
  discount: number;
  brand: number;
  salecount: number;
}

export interface AddProductDto {
  name: string;
  image: string;
  categoryId: number;
  price: number;
  tax: number;
  description: string;
  discount: number;
  brand: number;
}

export interface UpdateProductDto extends AddProductDto {
  id: number;
}
export interface GetProductListPayload {
  maxResultCount?: number;
  categoryId?: number;
  brand?: number;
  minPrice?: number;
  maxPrice?: number;
  skipCount?: number;
  keyword?: string;
}
