import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { VagnController } from './vagn.controller'
import { VagnService } from './vagnService'

@Module({
	controllers: [VagnController],
	providers: [VagnService, PrismaService],
})
export class VagnModule {}
