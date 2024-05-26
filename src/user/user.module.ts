import { Module } from '@nestjs/common'

import { DocService } from 'src/doc/doc.service'
import { PrismaService } from 'src/prisma.service'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaService, DocService],
	exports: [UserService]
})
export class UserModule {}
