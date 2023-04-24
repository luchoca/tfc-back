import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Ingrediente } from "src/ingredientes/schema/ingrediente.schema";
import { Usuario } from "src/usuario/schema/usuario.schema";

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop()
  idProducto: string;
  @Prop()
  nombre: string;
  @Prop()
  stock: number;
  @Prop()
  precio: number;
  @Prop()
  imagen: string;
  @Prop()
  descripcion: string;
  @Prop()
  habilitado: boolean;
  @Prop()
  minimo: number;
  @Prop()
  maximo: number;
  @Prop()
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Usuario.name })
  idUsuario: string;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Ingrediente.name }])
  ingredientes?: Ingrediente[];
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
