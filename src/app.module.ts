import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'

import { CehModule } from './ceh/ceh.module'
import { DocModule } from './doc/doc.module'
import { StationModule } from './station/station.module'
import { TovarModule } from './tovar/tovar.module'
import { UserModule } from './user/user.module'
import { VagnModule } from './vagn/vagn.module'
import { VagonsModule } from './vagons/vagons.module'
import { WayModule } from './way/way.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		DocModule,
		StationModule,
		TovarModule,
		VagnModule,
		VagonsModule,
		CehModule,
		WayModule
	]
})
export class AppModule {}
