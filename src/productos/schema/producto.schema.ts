import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop()
  id: number;
  @Prop()
  nombre: string;
  @Prop()
  stock: number;
  @Prop()
  precio: number;
  @Prop()
  image: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
