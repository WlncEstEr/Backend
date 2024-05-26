import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateCehDto {
	@IsInt()
	kceh: number
	@IsOptional()
	@IsString()
	nceh: string
	@IsOptional()
	@IsString()
	shceh: string
}
