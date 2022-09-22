import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpStatus,
  Res,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interface/product.interface';
import { ProductDTO } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  //mostrar todos los productos
  @Get('/')
  async allProducts(@Res() res): Promise<Product> {
    const allProducts = await this.productService.getAll();
    if (allProducts.length === 0)
      throw new NotFoundException('No existe ningún producto');
    return res.status(HttpStatus.OK).json({ productos: allProducts });
  }
  //obtener un solo producto por ID
  @Get('/:id')
  async oneProduct(@Param('id') id, @Res() res): Promise<Product> {
    const product = await this.productService.getOneProduct(id);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return res.status(HttpStatus.OK).json(product);
  }
  // guardar nuevos productos
  @Post('/')
  async saveProduct(
    @Res() res,
    @Body() newproduct: ProductDTO,
  ): Promise<Product> {
    const product = await this.productService.createProduct(newproduct);
    return res.status(HttpStatus.CREATED).json(product);
  }
  // Actualizar producto
  @Put('/:id')
  async productUpdate(
    @Res() res,
    @Param('id') id,
    @Body() updateProduct: ProductDTO,
  ): Promise<Product> {
    const productUpdate = await this.productService.updateProduct(
      id,
      updateProduct,
    );
    if (!productUpdate)
      throw new NotFoundException(
        'No existe el producto que se quiere actualizar',
      );
    return res.status(HttpStatus.OK).json({msg:'Producto actualizado correctamente',productUpdate});
  }
  //Eliminar producto
  @Delete('/:id')
  async productRemove(@Res() res, @Param('id') id): Promise<Product> {
    const productDelete = await this.productService.deleteProduct(id);
    if (!productDelete)
    throw new NotFoundException(
      'No existe el producto que se quiere eliminar',
    );
    return res.status(HttpStatus.OK).json({msg:'Producto Eliminado correctamente',productDelete});
  }
}
