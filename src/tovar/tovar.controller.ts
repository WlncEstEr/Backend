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
import { CreateTovarDto } from './dto/create-tovar.dto'
import { TovarService } from './tovar.service'

@Controller('tovar')
export class TovarController {
	constructor(private readonly tovarService: TovarService) {}

	@Get()
	@Auth()
	async getAll() {
		return this.tovarService.getAll()
	}

	@Post('create')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async getSelectStation(@Body() dto: CreateTovarDto) {
		return this.tovarService.createTovar(dto)
	}

	@Delete('delete/:id')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async deleteVagn(@Param('id') id: string) {
		return this.tovarService.deleteTovar(id)
	}
}
