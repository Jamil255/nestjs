import {
    IsArray,
    IsDateString,
    IsMilitaryTime,
    IsNotEmpty,
    IsString
} from 'class-validator';

export class createSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  readonly artist: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: Date;

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: Date;
}
