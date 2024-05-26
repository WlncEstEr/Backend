import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateVagonDto {
	@IsInt()
	nvag: number
	@IsOptional()
	@IsString()
	kodtvag: string
	@IsOptional()
	@IsString()
	gpod: string
	@IsOptional()
	@IsString()
	vesvag: string
	@IsOptional()
	@IsString()
	ves_grotp: string
}
