import { Controller, Post, Body, Get, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post('register')
  async register(@Body() body: any) {
    // TODO: Thêm logic đăng ký user
    return { message: 'User registered', data: body };
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    // TODO: Lấy thông tin user
    return { id, name: 'Demo User' };
  }
}

@Controller('participants')
export class VoteParticipantController {
  @Post('join')
  async joinSession(@Body() body: any) {
    // TODO: Thêm logic user tham gia vote session
    return { message: 'User joined session', data: body };
  }
}
