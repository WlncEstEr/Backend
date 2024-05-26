import { IsInt, IsString } from 'class-validator'

export class DeleteVagDto {
	@IsInt()
	num_doc: number
}

export class CreateVagnDto {
	@IsString()
	ndoc: string
	@IsInt()
	nvag: number
	@IsString()
	inside_load_code: string
	@IsString()
	kodtvag: string
	@IsString()
	gpod: string
	@IsString()
	vesvag: string
	@IsString()
	ves_grotp: string
	@IsString()
	ves_proves: string
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
	@IsInt()
	num_doc: number
}

// export class CreateVagnDto {
// 	@IsString()
// 	ndoc: string
// 	@IsInt()
// 	nvag: number
// 	@IsInt()
// 	inside_load_code: number
// 	@IsString()
// 	gpod: string
// 	@IsString()
// 	vesvag: string
// 	@IsString()
// 	ves_grotp: string
// 	@IsString()
// 	ves_proves: string
// 	@IsString()
// 	dat_ceh_otpr: string
// 	@IsString()
// 	dat_st_otpr: string
// 	@IsString()
// 	dat_st_nazn: string
// 	@IsString()
// 	dat_ceh_nazn: string
// 	@IsString()
// 	usr_ceh_otpr: string
// 	@IsString()
// 	usr_st_otpr: string
// 	@IsString()
// 	usr_st_nazn: string
// 	@IsString()
// 	usr_ceh_nazn: string
// 	@IsInt()
// 	num_doc: number
// }
