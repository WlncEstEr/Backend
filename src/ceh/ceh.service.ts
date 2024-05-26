import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateCehDto } from './dto/create-ceh.dto'

@Injectable()
export class CehService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.stationCeh.findMany()
	}

	async createCeh(dto: CreateCehDto) {
		return this.prisma.stationCeh.create({
			data: {
				kceh: dto.kceh,
				nceh: dto.nceh,
				shceh: dto.shceh
			}
		})
	}
	async deleteCeh(id: string) {
		return this.prisma.stationCeh.delete({
			where: {
				kceh: +id
			}
		})
	}
}
