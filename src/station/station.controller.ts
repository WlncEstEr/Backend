import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CreateStationDto } from './dto/create-station.dto'
import { StationService } from './station.service'

@Controller('station')
export class StationController {
	constructor(private readonly stationService: StationService) {}

	@Get()
	@Auth()
	async getAllStation() {
		return this.stationService.getAll()
	}

	@Post('create')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async getSelectStation(@Body() dto: CreateStationDto) {
		return this.stationService.createStation(dto)
	}

	@Delete('delete/:id')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async deleteVagn(@Param('id') id: string) {
		return this.stationService.deleteStation(id)
	}
}
