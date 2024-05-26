import { IsOptional, IsString } from 'class-validator'

export class CreateDocDto {
	@IsString()
	station_otpr: string
	@IsString()
	station_nazn: string
	@IsString()
	notpr: string
	@IsString()
	npol: string
	@IsString()
	way_code: string
	@IsString()
	dat_oform: string
	@IsString()
	dat_ceh_otpr: string
	@IsString()
	dat_st_otpr: string
	@IsString()
	dat_st_nazn: string
	@IsString()
	dat_ceh_nazn: string
	@IsString()
	usr_ceh_otpr: string
	@IsString()
	usr_st_otpr: string
	@IsString()
	usr_st_nazn: string
	@IsString()
	usr_ceh_nazn: string
	@IsString()
	user_id: string
}

export class UpdateDocDto {
	@IsOptional()
	@IsString()
	station_otpr: string
	@IsOptional()
	@IsString()
	station_nazn: string
	@IsOptional()
	@IsString()
	notpr: string
	@IsOptional()
	@IsString()
	npol: string
	@IsOptional()
	@IsString()
	way_code: string
	@IsOptional()
	@IsString()
	dat_oform: string
	@IsOptional()
	@IsString()
	dat_ceh_otpr: string
	@IsOptional()
	@IsString()
	dat_st_otpr: string
	@IsOptional()
	@IsString()
	dat_st_nazn: string
	@IsOptional()
	@IsString()
	dat_ceh_nazn: string
	@IsOptional()
	@IsString()
	usr_ceh_otpr: string
	@IsOptional()
	@IsString()
	usr_st_otpr: string
	@IsOptional()
	@IsString()
	usr_st_nazn: string
	@IsOptional()
	@IsString()
	usr_ceh_nazn: string
	@IsOptional()
	@IsString()
	user_id: string
}
