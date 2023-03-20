import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";

@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post("create")
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get("findAll")
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(":id")
  find(@Param("id") id: string) {
    return this.usuarioService.findByUserId(id);
  }

  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.usuarioService.remove(id);
  }
}
