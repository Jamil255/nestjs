import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateSongDTO {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  readonly artist;

  @IsDateString()
  @IsOptional()
  readonly releasedDate: Date;

  @IsOptional()
  @IsMilitaryTime()
  readonly duration: Date;

  @IsString()
  @IsOptional()
  readonly layrics: string;
}
