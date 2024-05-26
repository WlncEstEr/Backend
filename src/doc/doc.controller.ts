import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CreateDocDto, UpdateDocDto } from './doc.dto'
import { DocService } from './doc.service'

@Controller('doc')
export class DocController {
	constructor(private readonly docService: DocService) {}

	@Get()
	@Auth()
	async getAllDoc() {
		return this.docService.getAll()
	}

	@Get('lastdoc')
	@Auth()
	async getLastDoc() {
		return this.docService.getLastNDOC()
	}

	@Post('create')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async createDoc(@Body() dto: CreateDocDto) {
		return this.docService.creacteDoc(dto)
	}

	@Delete('delete/:id')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async deleteDoc(@Param('id') id: string) {
		return this.docService.deleteDoc(id)
	}

	@Put('update/:id')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async toggle(@Param('id') id: string, @Body() dto: UpdateDocDto) {
		return this.docService.updateDoc(id, dto)
	}
}
