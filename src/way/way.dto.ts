import { IsString } from 'class-validator'

export class CreateWayDto {
	@IsString()
	way_code: string
}
