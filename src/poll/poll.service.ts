import {
  BadRequestException,
  Injectable,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  PollCreateDto,
  PollCreateItem,
  PollIsPolledRequest,
  PollIsPolledResponse,
  PollPublishDto,
  PollQuestionCreateItem,
  PollResult,
  PollResultItem,
  PollResultRequest,
  PollSignUpDto,
} from './poll.type';

@Injectable()
export class PollService implements OnApplicationBootstrap {
  constructor(private readonly prismaService: PrismaService) {}

  async onApplicationBootstrap() {}

  async createEntirePoll(newPoll: PollCreateDto) {
    const isExist = await this.prismaService.pollInfo.findFirst({
      where: {
        name: newPoll.name,
      },
    });
    if (isExist) throw new Error('Poll already exist');
    const pollInfo = await this.prismaService.pollInfo.create({
      data: {
        name: newPoll.name,
        description: newPoll.description,
        address: newPoll.address || '',
        blockNumber: newPoll.blockNumber || '',
        metadata: {
          startTime: newPoll.metadata.startTime || 0,
          endTime: newPoll.metadata.endTime || 0,
          estimatedTime: newPoll.metadata.estimatedTime || 0,
          isAb: newPoll.metadata.isAb || false,
        },
      },
    });

    const questions = newPoll.questions;
    const questionResultList: {
      index: number;
      question: {
        id: number;
        qname: string;
        qdesc: string;
        pollInfoId: number;
        createdAt: Date;
      };
      optionResultList: {
        id: number;
        oname: string;
        odesc: string;
        oimg: string;
        pollQuestionId: number;
        createdAt: Date;
      }[];
    }[] = [];
    for (let index = 0; index < questions.length; index++) {
      const ques = questions[index];
      const question = await this.prismaService.pollQuestion.create({
        data: {
          qname: ques.qname,
          qdesc: ques.qdesc,
          pollInfoId: pollInfo.id,
        },
      });
      const options = ques.options;
      const optionResultList: {
        id: number;
        oname: string;
        odesc: string;
        oimg: string;
        pollQuestionId: number;
        createdAt: Date;
      }[] = [];
      for (let index = 0; index < options.length; index++) {
        const option = options[index];
        const optionResult = await this.prismaService.pollOption.create({
          data: {
            oname: option.oname || '',
            odesc: option.odesc || '',
            oimg: option.oimg || '',
            pollQuestionId: question.id,
          },
        });
        optionResultList.push(optionResult);
      }
      questionResultList.push({
        index,
        question,
        optionResultList,
      });
    }

    return {
      pollInfo,
      questionResultList,
    };
  }

  async createPoll(newPoll: PollCreateItem) {
    const isExist = await this.prismaService.pollInfo.findFirst({
      where: {
        name: newPoll.name,
      },
    });
    if (isExist) throw new Error('Poll already exist');
    return this.prismaService.pollInfo.create({
      data: {
        ...newPoll,
        address: newPoll.address || '',
        blockNumber: newPoll.blockNumber || '',
      },
    });
  }

  addQuestion(item: PollQuestionCreateItem) {}

  async isPolled(dto: PollIsPolledRequest): Promise<PollIsPolledResponse> {
    const { maciPubKey, pollId } = dto;
    const [isSignUp, poll] = await Promise.all([
      this.prismaService.pollSignUp.findFirst({
        where: {
          maciPubKey,
        },
      }),
      this.prismaService.pollVote.findUnique({
        where: {
          pollId,
          maciPubKey,
        },
      }),
    ]);

    return {
      isSignUp: !!isSignUp,
      maciPubKey,
      optionIndex: poll?.optionIndex || null,
    };
  }

  async signUp(dto: PollSignUpDto) {
    const isSignUp = await this.prismaService.pollSignUp.findFirst({
      select: {
        id: true,
      },
      where: {
        maciPubKey: dto.maciPubKey,
      },
    });

    if (isSignUp) {
      throw new BadRequestException('Already signed up');
    }

    const pollExist = await this.prismaService.pollInfo.findFirst({
      select: {
        id: true,
      },
      where: {
        id: dto.pollId,
      },
    });

    if (!pollExist) {
      throw new BadRequestException(`PollId=${dto.pollId} not exist`);
    }

    return this.prismaService.pollSignUp.create({
      data: {
        ...dto,
      },
    });
  }

  async poll(dto: PollPublishDto) {
    const maciPubKey = dto.maciPubKey.toLowerCase();
    const maciSK = dto.maciSK.toLowerCase();
    if (dto.optionIndex < 0)
      throw new BadRequestException('Invalid optionIndex');
    const isSignUp = await this.prismaService.pollSignUp.findFirst({
      select: {
        id: true,
      },
      where: {
        pollId: dto.pollId,
        maciPubKey: maciPubKey,
      },
    });

    if (!isSignUp) {
      throw new BadRequestException('Not signed up');
    }

    await this.prismaService.pollVote.upsert({
      where: {
        pollId: dto.pollId,
        maciPubKey: maciPubKey,
      },
      update: {
        optionIndex: dto.optionIndex,
        maciSK: maciSK,
      },
      create: {
        maciPubKey: maciPubKey,
        pollId: dto.pollId,
        maciSK: maciSK,
        optionIndex: dto.optionIndex,
      },
    });

    return this.prismaService.pollVote.create({
      data: {
        ...dto,
      },
    });
  }

  async pollResult(dto: PollResultRequest): Promise<PollResult> {
    const pollId = parseInt(dto.pollId);
    if (isNaN(pollId)) {
      throw new BadRequestException('Invalid pollId');
    }

    const pollQuestions = await this.prismaService.pollQuestion.findMany({
      where: {
        pollInfoId: parseInt(dto.pollId),
      },
    });

    if (!pollQuestions || !pollQuestions[0]) {
      throw new BadRequestException(`PollId=${dto.pollId} has no question`);
    }
    const q1 = pollQuestions[0];

    const options = await this.prismaService.pollOption.findMany({
      where: {
        pollQuestionId: q1.id,
      },
    });

    const pollVotes = await this.prismaService.pollVote.findMany({
      where: {
        pollId,
      },
    });

    const pollResults = options.map((option, index) => {
      const count = pollVotes.filter((vote) => vote.optionIndex === index);
      const r: PollResultItem = {
        oid: option.id,
        oname: option.oname,
        odesc: option.odesc,
        oimg: option.oimg,
        count: count.length,
      };
      return r;
    });

    const result: PollResult = {
      pollId,
      pollAddress: '',
      result: pollResults,
    };

    return result;
  }
}
