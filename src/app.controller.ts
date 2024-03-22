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
    return {
      isSignUp: false,
      maciPubKey: dto.maciPubKey,
      optionIndex: null,
    };
  }

  @Post('sign-up')
  async signUp(@Body() dto: PollSignUpDto) {
    return {
      pollId: dto.pollId,
      ...dto,
      success: true,
    };
  }

  @Post('poll')
  async poll(@Body() dto: PollPublishDto) {
    return {
      pollId: dto.pollId,
      ...dto,
      success: true,
    };
  }

  @Get('result')
  @ApiResponse({
    status: 200,
    description: 'Get poll result',
    type: PollResult,
  })
  async pollResult(@Query() dto: PollResultRequest): Promise<PollResult> {
    return {
      pollId: parseInt(dto.pollId),
      pollAddress: '0x123',
      result: [
        {
          oid: 1,
          oname: 'Option 1',
          odesc: 'Option 1 description',
          oimg: 'https://example.com/image.png',
          count: 10,
        },
        {
          oid: 2,
          oname: 'Option 2',
          odesc: 'Option 2 description',
          oimg: 'https://example.com/image.png',
          count: 20,
        },
      ],
    };
  }
}
