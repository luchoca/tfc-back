import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Producto } from './productos/schema/producto.schema';
import { ProductosService } from './productos/productos.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prodService: ProductosService,
  ) {}

  @Get()
  getHello(): Producto[] {
    return this.prodService.findAll();
  }
}
