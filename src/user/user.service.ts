import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { AuthDto } from 'src/auth/dto/auth.dto'

import { DocService } from 'src/doc/doc.service'
import { PrismaService } from 'src/prisma.service'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
	constructor(
		private prisma: PrismaService,
		private docService: DocService
	) {}

	async getAllUser() {
		return await this.prisma.user.findMany()
	}

	async getById(id: string) {
		return await this.prisma.user.findUnique({
			where: {
				id
			}
		})
	}

	getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email
			}
		})
	}

	async getProfile(id: string) {
		const profile = await this.getById(id)

		const docs = await this.docService.getDocForOneUser(id)

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...rest } = profile

		return {
			user: rest,
			docs
		}
	}

	async create(dto: AuthDto) {
		const user = {
			email: dto.email,
			name: '',
			phone: 123,
			password: await hash(dto.password),
			post: dto.post
		}

		return this.prisma.user.create({
			data: user
		})
	}

	async update(id: string, dto: UserDto) {
		let data = dto

		if (dto.password) {
			data = { ...dto, password: await hash(dto.password) }
		}
		return this.prisma.user.update({
			where: {
				id
			},
			data,
			select: {
				name: true,
				email: true,
				post: true,
				phone: true
			}
		})
	}
}
