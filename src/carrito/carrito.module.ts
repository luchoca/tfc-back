import { Module } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto, ProductoSchema } from 'src/productos/schema/producto.schema';
import { CarritoSchema } from './schemas/carrito.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Producto.name,
        schema: ProductoSchema,
      },
      {
        name: CarritoModule.name,
        schema: CarritoSchema,
      },
    ]),
  ],
  controllers: [CarritoController],
  providers: [CarritoService],
  exports: [CarritoService],
})
export class CarritoModule {}
