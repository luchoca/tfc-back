import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuario/schema/usuario.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<Usuario> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      //const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async login(user: Usuario) {
    const payload = { email: user.email, sub: user.idUsuario };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
