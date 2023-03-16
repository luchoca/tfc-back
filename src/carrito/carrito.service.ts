/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Producto,
  ProductoDocument,
} from 'src/productos/schema/producto.schema';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { Carrito } from './schemas/carrito.schema';

@Injectable()
export class CarritoService {
  private carrito: Carrito[];
  private prodComprados: Producto[];

  constructor(
    @InjectModel(Producto.name)
    private productoModule: Model<ProductoDocument>,
  ) {}
  async create(_createCarritoDto: CreateCarritoDto) {
    return this.productoModule.create(_createCarritoDto);
  }

  findAll() {
    return this.carrito;
  }

  findOne(idCarrito: number) {
    return this.carrito.find((carro) => carro.idCarrito === idCarrito);
  }

  update(
    idCarrito: number,
    _updateCarritoDto: UpdateCarritoDto,
    _idUsuario: number,
  ) {
    this.carrito = this.carrito.filter((prod) => prod.idUsuario !== idCarrito);
    this.carrito.push(_updateCarritoDto);
    return _updateCarritoDto;
  }

  remove(idCarrito: number) {
    const eliminar = this.carrito.find(
      (carro) => carro.idCarrito === idCarrito,
    );
    this.carrito = this.carrito.filter(
      (carro) => carro.idCarrito !== idCarrito,
    );
    return eliminar;
  }
}
