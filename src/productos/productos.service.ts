import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductoDto } from "./dto/create-producto.dto";
import { UpdateProductoDto } from "./dto/update-producto.dto";
import { Producto, ProductoDocument } from "./schema/producto.schema";

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto.name)
    private productoModule: Model<ProductoDocument>
  ) {}
  create(createProductoDto: CreateProductoDto) {
    return this.productoModule.create(createProductoDto);
  }

  findAll() {
    return this.productoModule.find();
  }

  findOne(id: number) {
    return this.productoModule.findById(id);
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return this.productoModule.findByIdAndUpdate(id, updateProductoDto);
  }
  remove(id: number) {
    return this.productoModule.findByIdAndDelete(id);
  }
}
