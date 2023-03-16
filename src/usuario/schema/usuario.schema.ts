import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Producto } from "src/productos/schema/producto.schema";

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop()
  idUsuario: number;
  @Prop()
  email: string;
  @Prop()
  prodComprados: Producto[];
}
export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
