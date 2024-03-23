import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { HomeController } from './app.controller';
import { PollService } from './poll/poll.service';
import { MaciController } from './maci/maci.controller';
import { MaciService } from './maci/maci.service';
import { LoggerService } from './service/logger.service';
import { NftController } from './nft/nft.controller';
@Module({
  imports: [
    ScheduleModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      ttl: 3000,
      max: 100000,
    }),
  ],
  controllers: [HomeController, MaciController, NftController],
  providers: [
    LoggerService,
    AppService,
    PrismaService,
    PollService,
    MaciService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
  ],
})
export class AppModule {}
