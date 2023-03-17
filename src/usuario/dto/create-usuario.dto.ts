import { Producto } from 'src/productos/schema/producto.schema';

export class CreateUsuarioDto {
  idUsuario: string;
  email: string;
  password: string;
  prodComprados: Producto[];
}
