import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Post()
  create(
    @Body() createCarritoDto: CreateCarritoDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Param('idUsuario') idUsuario: number,
  ) {
    return this.carritoService.create(createCarritoDto);
  }

  @Get()
  findAll() {
    return this.carritoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carritoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Param('idUsuario') idUsuario: number,
    @Body() _updateCarritoDto: UpdateCarritoDto,
  ) {
    return this.carritoService.update(id, _updateCarritoDto, idUsuario);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carritoService.remove(id);
  }
}
