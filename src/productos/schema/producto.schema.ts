import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import {
  Ingrediente,
} from "src/ingredientes/schema/ingrediente.schema";

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop({ type: Types.ObjectId })
  idProducto: Types.ObjectId;
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
  idCliente?: string;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Ingrediente.name }])
  ingredientes?: Ingrediente[];
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
