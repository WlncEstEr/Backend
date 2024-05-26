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
import { CreateVagnDto } from './dto/create-vagn.dto'
import { VagnService } from './vagnService'

@Controller('vagn')
export class VagnController {
	constructor(private readonly vagnService: VagnService) {}

	@Get('')
	@Auth()
	async getVagonsAll() {
		return this.vagnService.getAll()
	}

	@Get(':id')
	@Auth()
	async getVagonsOnId(@Param('id') ndoc: string) {
		return this.vagnService.getById(ndoc)
	}

	@Post('create')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async createVagn(@Body() dto: CreateVagnDto) {
		return this.vagnService.creacteVag(dto)
	}

	@Delete('delete/:id')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async deleteVagn(@Param('id') id: string) {
		return this.vagnService.deleteVag(id)
	}
}
