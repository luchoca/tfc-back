import { PartialType } from '@nestjs/mapped-types';
import { Producto } from 'src/productos/schema/producto.schema';
import { CreateCarritoDto } from './create-carrito.dto';

export class UpdateCarritoDto extends PartialType(CreateCarritoDto) {
  idCarrito: number;
  idUsuario: number;
  prodComprados: Producto[];
}
