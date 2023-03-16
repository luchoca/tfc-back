import { Producto } from 'src/productos/schema/producto.schema';

export class CreateUsuarioDto {
  idUsuario: number;
  email: string;
  prodComprados: Producto[];
}
