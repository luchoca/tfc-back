import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductoDto } from "./dto/create-producto.dto";
import { UpdateProductoDto } from "./dto/update-producto.dto";
import { Producto, ProductoDocument } from "./schema/producto.schema";

@Injectable()
export class ProductosService {
  private productos: Producto[];
  constructor(
    @InjectModel(Producto.name)
    private productoModule: Model<ProductoDocument>
  ) {
    // this.productos = [
    //   {
    //     id: 1,
    //     nombre: 'TFC ',
    //     stock: 10,
    //     precio: 500,
    //     image: './img/tfc1.jpg',
    //   },
    //   {
    //     id: 2,
    //     nombre: 'TFC 2',
    //     stock: 10,
    //     precio: 400,
    //     image: './img/tfc1.jpg',
    //   },
    //   {
    //     id: 3,
    //     nombre: 'TFC 3 ',
    //     stock: 10,
    //     precio: 450,
    //     image: './img/tfc1.jpg',
    //   },
    // ];
  }
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
    this.productoModule.findById(id);
    return this.productoModule.create(updateProductoDto);
  }
  remove(id: number) {
    const eliminar = this.productos.find((prod) => prod.id === id);
    this.productos = this.productos.filter((prod) => prod.id !== id);
    return eliminar;
  }
}
