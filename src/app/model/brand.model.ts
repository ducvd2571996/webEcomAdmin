export interface Brand {
  id: number;
  name: string;
  image: string;
  productCount: number;
}

export interface AddBrandDto {
  name: string;
  image: string;
}

export interface UpdateBrandDto {
  id: number;
  name: string;
  image: string;
}
