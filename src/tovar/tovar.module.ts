import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TovarController } from './tovar.controller'
import { TovarService } from './tovar.service'

@Module({
	controllers: [TovarController],
	providers: [TovarService, PrismaService],
})
export class TovarModule {}
