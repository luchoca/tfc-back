import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Producto } from "src/productos/schema/producto.schema";

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop()
  idUsuario: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  productosPersonalizados?: Producto[];
  @Prop()
  productosComprado?: Producto[];
}
export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
