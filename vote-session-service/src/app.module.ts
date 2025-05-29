import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoteSessionController, CandidateController } from './session.controller';

@Module({
  imports: [],
  controllers: [AppController, VoteSessionController, CandidateController],
  providers: [AppService],
})
export class AppModule {}
