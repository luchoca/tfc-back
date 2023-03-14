import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
  id: number;
  nombre: string;
  stock: number;
  precio: number;
  image: string;
}
