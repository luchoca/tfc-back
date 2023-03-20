/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CarritoService } from "./carrito.service";
import { CreateCarritoDto } from "./dto/create-carrito.dto";
import { UpdateCarritoDto } from "./dto/update-carrito.dto";

@Controller("carrito")
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Post("create")
  create(
    @Body() createCarritoDto: CreateCarritoDto,
    @Param("idUsuario") idUsuario: number
  ) {
    return this.carritoService.create(createCarritoDto);
  }

  @Get("findAll")
  findAll() {
    return this.carritoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.carritoService.findOne(id);
  }

  @Patch("/update:id")
  update(
    @Param("id") id: number,
    @Param("idUsuario") idUsuario: number,
    @Body() _updateCarritoDto: UpdateCarritoDto
  ) {
    return this.carritoService.update(id, _updateCarritoDto, idUsuario);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: number) {
    return this.carritoService.remove(id);
  }
}
