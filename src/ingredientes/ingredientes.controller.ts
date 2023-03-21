import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { IngredientesService } from "./ingredientes.service";
import { CreateIngredienteDto } from "./dto/create-ingrediente.dto";
import { UpdateIngredienteDto } from "./dto/update-ingrediente.dto";

@Controller("ingrediente")
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Post("create")
  create(@Body() createIngredienteDto: CreateIngredienteDto) {
    return this.ingredientesService.create(createIngredienteDto);
  }

  @Get("findAll")
  findAll() {
    return this.ingredientesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.ingredientesService.findOne(id);
  }

  @Patch("update/:id")
  update(
    @Param("id") id: number,
    @Body() updateIngredienteDto: UpdateIngredienteDto
  ) {
    return this.ingredientesService.update(id, updateIngredienteDto);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: number) {
    return this.ingredientesService.remove(id);
  }
}
