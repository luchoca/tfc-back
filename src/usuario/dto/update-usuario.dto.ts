import { PartialType } from '@nestjs/mapped-types';
import { Producto } from 'src/productos/schema/producto.schema';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  idUsuario: number;
  email: string;
  prodComprados: Producto[];
}
