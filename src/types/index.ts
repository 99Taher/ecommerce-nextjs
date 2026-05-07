export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  createdAt: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product?: Product;
}

export interface Order {
  id: string;
  userId: string;
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  total: number;
  createdAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}