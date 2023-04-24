import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type IngredienteDocument = Ingrediente & Document;

@Schema()
export class Ingrediente {
  @Prop()
  idIngrediente: string;
  @Prop()
  nombre: string;
  @Prop()
  precio: number;
  @Prop()
  stock: number;
}

export const IngredienteSchema = SchemaFactory.createForClass(Ingrediente);
