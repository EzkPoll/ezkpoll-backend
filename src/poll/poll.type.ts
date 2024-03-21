import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PollCreateMetadata {
  @ApiProperty()
  @IsNotEmpty()
  startTime: number;
  @ApiProperty()
  @IsNotEmpty()
  endTime: number;
  @ApiPropertyOptional()
  estimatedTime?: number;
}

export class PollOptionItemDto {
  @ApiProperty()
  @IsNotEmpty()
  oname: string;
  @ApiProperty()
  @IsNotEmpty()
  odesc: string;
  @ApiProperty()
  @IsNotEmpty()
  oimg: string;
}

export class PollQuestionCreateItemDto {
  @ApiProperty()
  @IsNotEmpty()
  qname: string;
  @ApiProperty()
  @IsNotEmpty()
  qdesc: string;
  @ApiProperty({
    isArray: true,
    type: PollOptionItemDto,
  })
  options: PollOptionItemDto[];
}

export class PollCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  description: string;
  @ApiProperty({
    type: PollCreateMetadata,
  })
  metadata: PollCreateMetadata;

  @ApiPropertyOptional()
  address?: string;
  @ApiPropertyOptional()
  blockNumber?: string;

  @ApiProperty({
    isArray: true,
    type: PollQuestionCreateItemDto,
  })
  questions: PollQuestionCreateItemDto[];
}

export interface PollCreateItem {
  name: string;
  description: string;
  metadata: {
    startTime: number;
    endTime: number;
    estimatedTime?: number;
  };

  address?: string;
  blockNumber?: string;
}

export interface PollQuestionCreateItem {
  pollInfoId: number;
  qname: string;
  qdesc: string;
  options?: PollOptionItem[];
}

export interface PollOptionItem {
  oname: string;
  odesc: string;
  oimg: string;
}

//
export class PollItemResponse {
  @ApiProperty()
  id!: number;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  description!: string;
  @ApiProperty()
  address!: string;
  @ApiProperty()
  blockNumber: string;
  @ApiProperty({
    type: PollCreateMetadata,
  })
  metadata: PollCreateMetadata;
  @ApiProperty()
  createdAt!: Date;
  @ApiProperty()
  updatedAt!: Date;
}

export class GetPollsResponse {
  @ApiProperty({
    type: PollItemResponse,
    isArray: true,
  })
  list: PollItemResponse[];
}
