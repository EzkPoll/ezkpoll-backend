import { CacheTTL } from '@nestjs/cache-manager';
import { MaciService } from './maci.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/prisma.service';
import { randomBytes } from 'ethers';
import { uint8ArrayToBn } from 'utils';
import { Logger } from '@nestjs/common';

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
  genMaciKeyPair() {
    // const random = uint8ArrayToBn(randomBytes(32));
    // Logger.log('random', random.toString());
    const result = this.maciService.genMaciKeyPair(undefined);
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
