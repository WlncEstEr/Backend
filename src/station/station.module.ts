import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { StationController } from './station.controller'
import { StationService } from './station.service'

@Module({
	controllers: [StationController],
	providers: [StationService, PrismaService],
})
export class StationModule {}
