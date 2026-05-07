import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().positive('Price must be positive'),
  image: z.string().url('Invalid image URL'),
  category: z.string().min(1, 'Category is required'),
  stock: z.number().int().nonnegative('Stock cannot be negative'),
});

export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, 'Review must be at least 10 characters'),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ProductInput = z.infer<typeof productSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;