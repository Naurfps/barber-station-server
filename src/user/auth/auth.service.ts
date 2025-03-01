import { Injectable, HttpException, HttpStatus } from "@nestjs/common"
import { PrismaService } from "prisma/prisma.service"

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } })

    if (!user) {
      throw new HttpException("Usuário não encontrado", HttpStatus.UNAUTHORIZED)
    }

    if (user.password !== password) {
      throw new HttpException("Senha incorreta", HttpStatus.UNAUTHORIZED)
    }

    return { user: { id: user.id, name: user.name, email: user.email, role: user.role } }
  }
}