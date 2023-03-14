import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  private productos: Producto[];
  constructor() {
    this.productos = [
      {
        id: 1,
        nombre: 'TFC ',
        stock: 10,
        precio: 500,
        image: './img/tfc1.jpg',
      },
    ];
  }

  create(createProductoDto: CreateProductoDto) {
    return this.productos.push(createProductoDto);
  }

  findAll() {
    return this.productos;
  }

  findOne(id: number) {
    return this.productos.find((prod) => prod.id === id);
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    this.productos = this.productos.filter((prod) => prod.id !== id);
    this.productos.push(updateProductoDto);
    return updateProductoDto;
  }

  // filtro todos los prod que no tienen el id q me estan
  // pasando y luego le pusheo el prod q coincida

  remove(id: number) {
    const eliminar = this.productos.find((prod) => prod.id === id);
    this.productos = this.productos.filter((prod) => prod.id !== id);
    return eliminar;
  }
}
