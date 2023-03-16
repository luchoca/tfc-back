import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Producto } from 'src/productos/schema/producto.schema';

export type CarritoDocument = Carrito & Document;

@Schema()
export class Carrito {
  @Prop()
  idCarrito: number;
  @Prop()
  idUsuario: number;
  @Prop()
  prodComprados: Producto[];
}
export const CarritoSchema = SchemaFactory.createForClass(Carrito);
