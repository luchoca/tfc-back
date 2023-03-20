/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { Usuario, UsuarioDocument } from "./schema/usuario.schema";

@Injectable()
export class UsuarioService {
  private readonly users: Usuario[];

  constructor(
    @InjectModel(Usuario.name)
    private usuarioModel: Model<UsuarioDocument>
  ) {
    this.users = [
      {
        idUsuario: "1",
        email: "johnpichincha@gmail.com",
        password: "changeme",
      },
      {
        idUsuario: "2",
        email: "marialaqueechoalgianni@gmail.com",
        password: "secret",
      },
      {
        idUsuario: "3",
        email: "johnedward@gmail.com",
        password: "guess",
      },
    ];
  }

  create(_createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioModel.create(_createUsuarioDto);
  }

  findAll() {
    return this.usuarioModel.find();
  }

  findByUserId(id: string) {
    return this.usuarioModel.findById(id);
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto);
  }

  remove(id: string) {
    return this.usuarioModel.findByIdAndDelete(id);
  }

  async findOne(email: string): Promise<Usuario | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
