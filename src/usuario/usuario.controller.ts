import { Body, Controller, Post } from '@nestjs/common';
import Usuario from './usuario.entity';

@Controller('usuario')
export class UsuarioController {
  @Post()
  async criar(@Body() usuario: Usuario) {
    console.log(usuario);
    return { ...usuario, id: 1000 };
  }
}
