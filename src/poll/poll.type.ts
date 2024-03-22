import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class PollCreateMetadata {
  @ApiProperty()
  @IsNotEmpty()
  startTime: number;
  @ApiProperty()
  @IsNotEmpty()
  endTime: number;
  @ApiPropertyOptional()
  estimatedTime?: number;

  @ApiPropertyOptional()
  isAb?: boolean;
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

export class GetPollDetail {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  id: string;
}

export class PollSignUpDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pollId: number;
  @ApiProperty()
  @IsNotEmpty()
  address: string;
  @ApiProperty()
  @IsNotEmpty()
  maciPubKey: string;
}

export class PollPublishDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pollId: number;
  @ApiProperty()
  @IsNotEmpty()
  maciPubKey: string;
  @ApiProperty()
  @IsNotEmpty()
  maciSK: string;
  @ApiProperty()
  @IsNotEmpty()
  optionIndex: number;
}

export class PollResultRequest {
  @ApiProperty()
  pollId: string;
}

export class PollResult {
  @ApiProperty()
  pollId: number;

  @ApiProperty()
  pollAddress: string;

  @ApiProperty({
    isArray: true,
    type: Number,
  })
  result: number[];
}
