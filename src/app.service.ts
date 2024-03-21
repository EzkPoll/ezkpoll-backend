import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor() {}

  async onApplicationBootstrap() {}

  cnt = 0;

  intervalId: NodeJS.Timeout | null = null;
  start() {
    this.intervalId = setInterval(() => {
      console.log('cnt:', this.cnt++);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.cnt = 0;
    this.intervalId = null;
  }
}
