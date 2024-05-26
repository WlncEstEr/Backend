import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateStationDto } from './dto/create-station.dto'

// РАЗОБРАТЬСЯ ПОЧЕМУ НЕ РАБОТАЕТ prisma, И ЗА push BD

@Injectable()
export class StationService {
	constructor(private prisma: PrismaService) {}

	getAll() {
		return this.prisma.stationInside.findMany() || []
	}

	async createStation(dto: CreateStationDto) {
		return await this.prisma.stationInside.create({
			data: {
				station_inside_code: dto.station_inside_code,
				station_inside_name: dto.station_inside_name
			}
		})
	}

	async deleteStation(id: string) {
		return this.prisma.stationInside.delete({
			where: {
				station_inside_code: +id
			}
		})
	}
}
