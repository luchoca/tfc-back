/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './schema/usuario.schema';

@Injectable()
export class UsuarioService {
  private readonly users: Usuario[];

  constructor() {
    this.users = [
      {
        idUsuario: "1",
        email: 'johnpichincha@gmail.com',
        password: 'changeme',
      },
      {
        idUsuario: "2",
        email: 'marialaqueechoalgianni@gmail.com',
        password: 'secret',
      },
      {
        idUsuario: "3",
        email: 'johnedward@gmail.com',
        password: 'guess',
      },
    ];
  }

  create(_createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  //findOne(id: number) {
  //  return `This action returns a #${id} usuario`;
  //}

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

  async findOne(email: string): Promise<Usuario | undefined> {
    return this.users.find(user => user.email === email);
  }
}
