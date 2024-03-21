import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  PollCreateDto,
  PollCreateItem,
  PollQuestionCreateItem,
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
}
