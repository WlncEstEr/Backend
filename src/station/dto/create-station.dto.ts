import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateStationDto {
	@IsInt()
	station_inside_code: number
	@IsOptional()
	@IsString()
	station_inside_name: string
}
