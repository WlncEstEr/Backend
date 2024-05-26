import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateTovarDto {
	@IsInt()
	inside_load_code: number
	@IsOptional()
	@IsString()
	inside_load_name: string
}
