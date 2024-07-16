import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Usuario from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private prismaServece: PrismaService) {}

  async obterTodos() {
    return this.prismaServece.usuario.findMany();
  }

  async obterProId(id: number) {
    return this.prismaServece.usuario.findUnique({
      where: {
        id,
      },
    });
  }

  async criar(usuario: Usuario) {
    return this.prismaServece.usuario.create({
      data: usuario as any,
    });
  }

  async atualizar(usuario: Usuario) {
    if (!usuario.id) throw new Error('Usuário se ID!');
    return this.prismaServece.usuario.update({
      where: {
        id: usuario.id,
      },
      data: usuario as any,
    });
  }

  async deletar(id: number) {
    return this.prismaServece.usuario.delete({
      where: {
        id,
      },
    });
  }
}
