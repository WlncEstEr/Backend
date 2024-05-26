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
import { CreateVagonDto } from './dto/create-vagon.dto'
import { VagonsService } from './vagons.service'

@Controller('vagons')
export class VagonsController {
	constructor(private readonly vagonsService: VagonsService) {}

	@Get()
	@Auth()
	async getAll() {
		return this.vagonsService.getAll()
	}

	@Post('create')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async getSelectStation(@Body() dto: CreateVagonDto) {
		return this.vagonsService.createVagons(dto)
	}

	@Delete('delete/:id')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async deleteVagn(@Param('id') id: string) {
		return this.vagonsService.deleteTovar(id)
	}
}
