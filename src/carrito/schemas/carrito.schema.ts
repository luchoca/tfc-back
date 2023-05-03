import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Producto } from "src/productos/schema/producto.schema";

export type CarritoDocument = Carrito & Document;

@Schema()
export class Carrito {
  @Prop()
  idCarrito: number;
  @Prop()
  idUsuario: number;
  @Prop()
  date: Date;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Producto.name }])
  productsPurchased: Producto[];
}
export const CarritoSchema = SchemaFactory.createForClass(Carrito);
