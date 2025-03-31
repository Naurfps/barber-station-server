import { Role } from "@prisma/client"
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class CreateUserDto {
   @IsString()
   @IsNotEmpty()
   name

   @IsEmail()
   email

   @IsString()
   @MinLength(6, { message: "A senha deve ter pelo menos 6 caracteres" })
   password

   @IsOptional()
   @IsEnum(Role, { message: "A role deve ser USER, EMPLOYEE ou ADMIN" }) // Validação do enum
   role: Role;
}