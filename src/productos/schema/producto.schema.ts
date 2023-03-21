import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Ingrediente } from "src/ingredientes/schema/ingrediente.schema";

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop()
  idProducto: number;
  @Prop()
  nombre: string;
  @Prop()
  stock: number;
  @Prop()
  precio: number;
  @Prop()
  image: string;
  @Prop()
  idCliente?: string;
  @Prop()
  ingredientes: Ingrediente[];
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
