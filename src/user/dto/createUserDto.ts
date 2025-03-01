import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {
   @IsString()
   @IsNotEmpty()
   name

   @IsEmail()
   email

   @IsString()
   @MinLength(6, { message: "A senha deve ter pelo menos 6 caracteres" })
   password
}