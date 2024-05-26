import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { WayController } from './way.controller'
import { WayService } from './way.service'

@Module({
	controllers: [WayController],
	providers: [WayService, PrismaService]
})
export class WayModule {}
