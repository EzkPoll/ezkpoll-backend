import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

export class OraRequest {
  @ApiProperty({})
  prompt: string;
}

@ApiTags('maci')
@Controller('maci')
export class NftService {
  @Post('ora')
  async ora(@Body() oraRequest: OraRequest) {
    // TODO: call ora contract
    return {
      prompt: oraRequest.prompt,
      txHash: '0x1234567890',
    };
  }
}
