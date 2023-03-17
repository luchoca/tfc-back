import { PartialType } from '@nestjs/mapped-types';
import { Producto } from 'src/productos/schema/producto.schema';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  idUsuario: string;
  email: string;
  password: string;
  prodComprados: Producto[];
}
