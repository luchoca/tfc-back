import { Ingrediente } from "src/ingredientes/schema/ingrediente.schema";

export class CreateProductoDto {
  idProducto: number;
  nombre: string;
  stock: number;
  precio: number;
  image: string;
  idCliente?: string;
  ingredientes: Ingrediente[];
}
