import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoteController } from './vote.controller';

@Module({
  imports: [],
  controllers: [AppController, VoteController],
  providers: [AppService],
})
export class AppModule {}
