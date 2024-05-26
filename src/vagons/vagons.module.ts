import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { VagonsController } from './vagons.controller'
import { VagonsService } from './vagons.service'

@Module({
	controllers: [VagonsController],
	providers: [VagonsService, PrismaService],
})
export class VagonsModule {}
