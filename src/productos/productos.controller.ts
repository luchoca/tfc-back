import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductosService } from "./productos.service";
import { CreateProductoDto } from "./dto/create-producto.dto";
import { UpdateProductoDto } from "./dto/update-producto.dto";

@Controller("productos")
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post("create")
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get("findAll")
  findAll() {
    return this.productosService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.productosService.findOne(id);
  }

  @Patch("update/:id")
  update(
    @Param("id") id: number,
    @Body() updateProductoDto: UpdateProductoDto
  ) {
    return this.productosService.update(id, updateProductoDto);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: number) {
    return this.productosService.remove(id);
  }
}
