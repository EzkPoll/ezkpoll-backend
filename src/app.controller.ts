import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from './prisma.service';
import { PollService } from './poll/poll.service';
import { PollCreateDto } from './poll/poll.type';

@ApiTags('Home')
@Controller('')
export class HomeController {
  constructor(
    private readonly pollService: PollService,
    private prisma: PrismaService,
  ) {}

  @Get('')
  home() {
    return {
      time: Date.now(),
    };
  }

  @Get('polls')
  async polls() {
    return await this.prisma.pollInfo.findMany();
  }

  @Post('create-poll')
  async createPoll(@Body() dto: PollCreateDto) {
    try {
      const result = await this.pollService.createEntirePoll(dto);
      return {
        result,
      };
    } catch (error: any) {
      console.error(error);
      throw new BadRequestException(error.message);
    }
  }
}
