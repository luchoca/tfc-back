import { ObjectId } from "mongoose";
import { Ingrediente } from "src/ingredientes/schema/ingrediente.schema";

export class CreateProductoDto {
  idProducto: ObjectId;
  nombre: string;
  stock: number;
  precio: number;
  image: string;
  idCliente?: string;
  ingredientes: Ingrediente[];
}
