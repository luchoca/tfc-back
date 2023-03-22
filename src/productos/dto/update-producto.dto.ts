import { PartialType } from "@nestjs/mapped-types";
import { ObjectId } from "mongoose";
import { Ingrediente } from "src/ingredientes/schema/ingrediente.schema";
import { CreateProductoDto } from "./create-producto.dto";

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
  idProducto: ObjectId;
  nombre: string;
  stock: number;
  precio: number;
  image: string;
  idCliente?: string;
  ingredientes: Ingrediente[];
}
