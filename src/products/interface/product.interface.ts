import { Document } from 'mongoose';

export interface Product extends Document {
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  stock: number;
}
