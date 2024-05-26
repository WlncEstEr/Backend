import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateTovarDto } from './dto/create-tovar.dto'

@Injectable()
export class TovarService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.insideLoads.findMany()
	}

	async createTovar(dto: CreateTovarDto) {
		return await this.prisma.insideLoads.create({
			data: {
				inside_load_code: dto.inside_load_code,
				inside_load_name: dto.inside_load_name
			}
		})
	}

	async deleteTovar(id: string) {
		return this.prisma.insideLoads.delete({
			where: {
				inside_load_code: +id
			}
		})
	}
}
