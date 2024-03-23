import { CacheTTL } from '@nestjs/cache-manager';
import { MaciService } from './maci.service';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/prisma.service';
import { keccak256, randomBytes } from 'ethers';
import { uint8ArrayToBn } from 'utils';
import { Logger } from '@nestjs/common';

class GenMaciKeyPairRequest {
  @ApiProperty()
  seed: string;
}

@ApiTags('maci')
@Controller('maci')
export class MaciController {
  constructor(
    private readonly maciService: MaciService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('')
  home() {
    return {
      time: Date.now(),
    };
  }

  @Get('gen')
  @ApiResponse({
    status: 200,
    description: 'Generate MACI key pair',
  })
  genMaciKeyPair(@Query() dto: GenMaciKeyPairRequest) {
    const hash = keccak256(dto.seed);
    const result = this.maciService.genMaciKeyPair(BigInt(hash));
    Logger.log({
      genMaciKeyPair: result,
    });
    return {
      result,
    };
  }

  @Get('deploy-poll')
  deployPoll() {
    // const random = uint8ArrayToBn(randomBytes(32));
    // Logger.log('random', random.toString());
    const result = this.maciService.deployPoll();
    Logger.log({
      deployPoll: result,
    });
    return {
      result,
    };
  }
}
