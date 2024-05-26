import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateDocDto, UpdateDocDto } from './doc.dto'

@Injectable()
export class DocService {
	constructor(private prisma: PrismaService) {}

	// ПОИСК НАКЛАДНОЙ
	getByNDOC(id: number) {
		const unicNdoc = this.prisma.transDoc.findUnique({
			where: {
				num_doc: id
			}
		})
		if (!unicNdoc) throw new NotFoundException('Not found!')

		return unicNdoc
	}

	// ПОСЛЕДНЯЯ НАКЛАДНАЯ
	getLastNDOC() {
		const unicNdoc = this.prisma.transDoc.findFirst({
			select: {
				ndoc: true
			},
			orderBy: {
				num_doc: 'asc'
			},
			take: -1
		})
		return unicNdoc
	}

	// ВСЕ НАКЛАДЫНЫЕ
	async getAll() {
		return {
			docs: await this.prisma.transDoc.findMany({
				orderBy: { ndoc: 'asc' }
			})
		}
	}

	async getDocForOneUser(id: string) {
		return await this.prisma.transDoc.findMany({
			where: {
				user_id: id
			},
			orderBy: { ndoc: 'asc' }
		})
	}

	async creacteDoc(dto: CreateDocDto) {
		const lastdoc = await this.getLastNDOC()
		let leng = Number(lastdoc.ndoc) + 1

		function lastDoc() {
			switch (String(leng).length) {
				case 1:
					return '000000000' + leng
				case 2:
					return '00000000' + leng
				case 3:
					return '0000000' + leng
				case 4:
					return '000000' + leng
				case 5:
					return '00000' + leng
				case 6:
					return '0000' + leng
				case 7:
					return '000' + leng
				case 8:
					return '00' + leng
				case 9:
					return '0' + leng
				case 10:
					return String(leng)
			}
		}

		const doc = {
			ndoc: lastDoc() || '00001',
			station_otpr: dto.station_otpr,
			station_nazn: dto.station_otpr,
			notpr: dto.notpr,
			npol: dto.npol,
			way_code: dto.way_code,
			dat_oform: dto.dat_oform,
			dat_ceh_otpr: dto.dat_ceh_otpr,
			dat_st_otpr: dto.dat_st_otpr,
			dat_st_nazn: dto.dat_st_nazn,
			dat_ceh_nazn: dto.dat_ceh_nazn,
			usr_ceh_otpr: dto.usr_ceh_otpr,
			usr_st_otpr: dto.usr_st_otpr,
			usr_st_nazn: dto.usr_st_nazn,
			usr_ceh_nazn: dto.usr_ceh_nazn,
			num_doc: leng || 1,
			user_id: dto.user_id
		}
		return this.prisma.transDoc.create({
			data: doc
		})
	}

	async deleteDoc(ndoc: string) {
		return await this.prisma.transDoc.delete({
			where: {
				ndoc: ndoc
			}
		})
	}

	async updateDoc(ndoc: string, dto: UpdateDocDto) {
		return this.prisma.transDoc.update({
			where: {
				ndoc: ndoc
			},
			data: dto
		})
	}

	// ПРОТЕСТИРОВАТЬ АВТОРИЗАЦИЮ НА ФРОНТ ЧАСТИ
	// ПОСЛЕ ДОДЕЛАТЬ БД (ИЗ СТАРОГО ПРОЕКТА В НОВЫЙ)
}
