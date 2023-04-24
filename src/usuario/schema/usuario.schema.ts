import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
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
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Producto.name }])
  productosPersonalizados?: Producto[];
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Producto.name }])
  productosComprado?: Producto[];
}
export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
