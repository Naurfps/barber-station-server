import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUserDto";
import { PrismaService } from "prisma/prisma.service";
import { Role } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}
    async createUser(createUserDto: CreateUserDto) {
        const { name, password, email, role } = createUserDto;
        const userExist = await this.prismaService.user.findUnique({
            where: {
                email,
                password,
            },
        });

        if (userExist) {
            throw new HttpException('Usuario já existente' , HttpStatus.BAD_REQUEST);
        }

        const user = await this.prismaService.user.create({
            data: {
                name,
                email,
                password,
                role,
            },
        });
        
        return user;
    }
}