import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from './prisma.service';
import { PollService } from './poll/poll.service';
import {
  GetPollDetail,
  GetPollsResponse,
  PollCreateDto,
  PollIsPolledRequest,
  PollIsPolledResponse,
  PollPublishDto,
  PollResult,
  PollResultRequest,
  PollSignUpDto,
} from './poll/poll.type';

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
    const list = await this.prisma.pollInfo.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    return {
      list,
    };
  }

  @Get('poll/:id')
  @ApiResponse({
    status: 200,
    description: 'Get poll detail',
  })
  async pollDetail(@Query() dto: GetPollDetail) {
    const idNumber = parseInt(dto.id);
    if (isNaN(idNumber)) throw new BadRequestException('Invalid id');
    return await this.prisma.pollInfo.findUnique({
      where: {
        id: idNumber,
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

  @Get('is-polled')
  @ApiResponse({
    status: 200,
    description: 'Check if user is polled',
    type: PollIsPolledResponse,
  })
  async isPolled(@Query() dto: PollIsPolledRequest) {
    return await this.pollService.isPolled(dto);
  }

  @Post('sign-up')
  async signUp(@Body() dto: PollSignUpDto) {
    return await this.pollService.signUp(dto);
  }

  @Post('poll')
  async poll(@Body() dto: PollPublishDto) {
    return await this.pollService.poll(dto);
  }

  @Get('result')
  @ApiResponse({
    status: 200,
    description: 'Get poll result',
    type: PollResult,
  })
  async pollResult(@Query() dto: PollResultRequest): Promise<PollResult> {
    return await this.pollService.pollResult(dto);
  }
}
