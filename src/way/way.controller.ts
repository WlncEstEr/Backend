import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CreateWayDto } from './way.dto'
import { WayService } from './way.service'

@Controller('way')
export class WayController {
	constructor(private readonly wayService: WayService) {}

	@Auth()
	@Get()
	async getWay() {
		return this.wayService.getAll()
	}

	@Auth()
	@Post()
	@HttpCode(200)
	async create(@Body() dto: CreateWayDto) {
		return this.wayService.create(dto)
	}

	@Auth()
	@Delete(':id')
	@HttpCode(200)
	async delete(@Param('id') id: string) {
		return this.wayService.delete(id)
	}
}
