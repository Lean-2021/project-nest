import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  //mostrar todos los productos de la base de datos
  async getAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }
  //mostrar producto por Id seleccionado
  async getOneProduct(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    return product;
  }
  //guardar nuevos Productos en la base de datos
  async createProduct(product: ProductDTO): Promise<Product> {
    try {
      const newProduct = new this.productModel(product);
      await newProduct.save();
      return newProduct;
    } catch (error) {
      console.log(error);
    }
  }
  //actualizar Producto
  async updateProduct(id: string, product: ProductDTO): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
  }
  // borrar producto
  async deleteProduct(id: string): Promise<Product> {
    const productRemove = await this.productModel.findByIdAndDelete(id);
    return productRemove;
  }
}
