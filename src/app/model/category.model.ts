export interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
}

export interface AddCategoryDto {
  name: string;
  image: string;
}

export interface UpdateCategoryDto extends AddCategoryDto {
  id: number;
}
