import { Post } from '@prisma/client'
import {
	IsEmail,
	IsInt,
	IsOptional,
	IsString,
	MinLength
} from 'class-validator'

export class UserDto {
	@IsEmail()
	@IsOptional()
	email?: string

	@IsString()
	@IsOptional()
	name?: string

	@IsInt()
	@IsOptional()
	phone?: number

	@IsString()
	@IsOptional()
	post?: Post

	@IsOptional()
	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})
	@IsString()
	password?: string
}
