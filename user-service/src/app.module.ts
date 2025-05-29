import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController, VoteParticipantController } from './user.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, VoteParticipantController],
  providers: [AppService],
})
export class AppModule {}
