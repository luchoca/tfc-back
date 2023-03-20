/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  Producto,
  ProductoDocument,
} from "src/productos/schema/producto.schema";
import { CreateCarritoDto } from "./dto/create-carrito.dto";
import { UpdateCarritoDto } from "./dto/update-carrito.dto";
import { Carrito, CarritoDocument } from "./schemas/carrito.schema";

@Injectable()
export class CarritoService {
  private carrito: Carrito[];
  // private prodComprados: Producto[];
  constructor(
    @InjectModel(Carrito.name)
    private carritoModule: Model<CarritoDocument>,
    @InjectModel(Producto.name)
    private productoModule: Model<ProductoDocument>
  ) {}

  async create(_createCarritoDto: CreateCarritoDto) {
    return this.carritoModule.create(_createCarritoDto);
  }

  findAll() {
    return this.carritoModule.find();
  }

  findOne(idCarrito: number) {
    return this.carritoModule.findById(idCarrito);
  }

  update(
    idCarrito: number,
    _updateCarritoDto: UpdateCarritoDto,
    _idUsuario?: number
  ) {
    return this.carritoModule.findByIdAndUpdate(idCarrito, _updateCarritoDto);
  }

  remove(idCarrito: number) {
    return this.carritoModule.findByIdAndDelete(idCarrito);
  }
}
