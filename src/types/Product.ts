export interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image?: string;
}

export interface ProductFormData {
  title: string;
  price: string;
  description: string;
}

export interface FormErrors {
  title?: string;
  price?: string;
  description?: string;
  submit?: string;
}