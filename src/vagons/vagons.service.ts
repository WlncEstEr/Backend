import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateVagonDto } from './dto/create-vagon.dto'

@Injectable()
export class VagonsService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.intVagon.findMany()
	}

	async createVagons(dto: CreateVagonDto) {
		return this.prisma.intVagon.create({
			data: {
				nvag: dto.nvag,
				kodtvag: dto.kodtvag,
				gpod: dto.gpod,
				vesvag: dto.vesvag,
				ves_grotp: dto.ves_grotp
			}
		})
	}
	async deleteTovar(id: string) {
		return this.prisma.intVagon.delete({
			where: {
				nvag: +id
			}
		})
	}
}
