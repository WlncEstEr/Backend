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
import { CehService } from './ceh.service'
import { CreateCehDto } from './dto/create-ceh.dto'

@Controller('ceh')
export class CehController {
	constructor(private readonly cehService: CehService) {}

	@Get()
	@Auth()
	async getAll() {
		return this.cehService.getAll()
	}

	@Post('create')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async getSelectStation(@Body() dto: CreateCehDto) {
		return this.cehService.createCeh(dto)
	}

	@Delete('delete/:id')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async deleteVagn(@Param('id') id: string) {
		return this.cehService.deleteCeh(id)
	}
}
