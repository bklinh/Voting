import { Controller, Post, Body, Get, Param } from '@nestjs/common';

@Controller('sessions')
export class VoteSessionController {
  @Post('create')
  async createSession(@Body() body: any) {
    // TODO: Thêm logic tạo vote session
    return { message: 'Vote session created', data: body };
  }

  @Get(':id')
  async getSession(@Param('id') id: string) {
    // TODO: Lấy thông tin session
    return { id, title: 'Demo Session' };
  }
}

@Controller('candidates')
export class CandidateController {
  @Post('add')
  async addCandidate(@Body() body: any) {
    // TODO: Thêm logic thêm ứng viên vào session
    return { message: 'Candidate added', data: body };
  }
}
