import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateWayDto } from './way.dto'

@Injectable()
export class WayService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return await this.prisma.wayCode.findMany()
	}
	async create(dto: CreateWayDto) {
		const way = await this.prisma.wayCode.create({
			data: dto
		})
	}
	async delete(id: string) {
		return await this.prisma.wayCode.delete({
			where: {
				way_code: id
			}
		})
	}
}
