import { Producto } from 'src/productos/schema/producto.schema';

export class CreateCarritoDto {
  idCarrito: number;
  idUsuario: number;
  prodComprados: Producto[];
}
