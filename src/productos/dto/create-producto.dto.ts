import { ObjectId } from "mongoose";
import { Ingrediente } from "src/ingredientes/schema/ingrediente.schema";

export class CreateProductoDto {
  idProducto: ObjectId;
  nombre: string;
  stock: number;
  precio: number;
  imagen: string;
  descripcion: string;
  habilitado: boolean;
  minimo: number;
  maximo: number;
  idCliente?: string;
  ingredientes: Ingrediente[];
}
