import { PartialType } from "@nestjs/mapped-types";
import { Ingrediente } from "src/ingredientes/schema/ingrediente.schema";
import { CreateProductoDto } from "./create-producto.dto";

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
  idProducto: number;
  nombre: string;
  stock: number;
  precio: number;
  image: string;
  idCliente?: string;
  ingredientes: Ingrediente[];
}
