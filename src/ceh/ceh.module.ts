import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CehController } from './ceh.controller'
import { CehService } from './ceh.service'

@Module({
	controllers: [CehController],
	providers: [CehService, PrismaService],
})
export class CehModule {}
