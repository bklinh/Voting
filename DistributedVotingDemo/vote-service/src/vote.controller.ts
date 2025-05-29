import { Controller, Post, Body, Get, Param } from '@nestjs/common';

@Controller('votes')
export class VoteController {
  @Post('cast')
  async castVote(@Body() body: any) {
    // TODO: Thêm logic bỏ phiếu
    return { message: 'Vote casted', data: body };
  }

  @Get(':id')
  async getVote(@Param('id') id: string) {
    // TODO: Lấy thông tin phiếu bầu
    return { id, status: 'Demo Vote' };
  }
}
