import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from './prisma.service';
import { PollService } from './poll/poll.service';
import { GetPollsResponse, PollCreateDto } from './poll/poll.type';

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
  @ApiResponse({
    status: 200,
    description: 'Get all polls',
    type: GetPollsResponse,
  })
  async polls() {
    const list = await this.prisma.pollInfo.findMany();
    return {
      list,
    };
  }

  @Get('poll/:id')
  @ApiResponse({
    status: 200,
    description: 'Get poll detail',
  })
  async pollDetail(id: number) {
    return await this.prisma.pollInfo.findUnique({
      where: {
        id,
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });
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
