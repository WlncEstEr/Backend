import { Post } from '@prisma/client'
import { Transform } from 'class-transformer'
import {
	IsEmail,
	IsEnum,
	IsInt,
	IsOptional,
	IsString,
	MinLength
} from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})
	@IsString()
	password: string

	@IsString()
	@IsOptional()
	name: string

	@IsInt()
	@IsOptional()
	phone: number

	@IsEnum(Post)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	post?: Post
}
