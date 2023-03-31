import { Controller, Get, Query, Param } from '@nestjs/common';
import { UserService } from './user.service'

import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger'


@ApiTags('用户')
@Controller('user')
export class UserController {
  // constructor(private readonly userService: UserService) { }
  
  @ApiOperation({
    summary: '获取用户信息',
  })
  // @ApiResponse()
  // @ApiBearerAuth('token')
  @Get(':id')
  getUserInfo(@Param('id') id:string | number) {
    return 'qile' + id
  }
}
