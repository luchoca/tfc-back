import { Producto } from 'src/productos/schema/producto.schema';

export class Usuario {
  idUsuario: number;
  email: string;
  prodComprados: Producto[];
}
