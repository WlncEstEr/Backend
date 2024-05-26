import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateVagnDto } from './dto/create-vagn.dto'

@Injectable()
export class VagnService {
	constructor(private prisma: PrismaService) {}

	getById(ndoc: string) {
		return this.prisma.transStr.findMany({
			where: {
				num_doc: +ndoc
			}
		})
	}

	async getAll() {
		const vagn = await this.prisma.transStr.findMany()
		return vagn
	}

	async creacteVag(dto: CreateVagnDto) {
		return await this.prisma.transStr.create({
			data: dto
		})
	}

	async deleteVag(id: string) {
		return await this.prisma.transStr.deleteMany({
			where: {
				num_doc: +id
			}
		})
	}
}
