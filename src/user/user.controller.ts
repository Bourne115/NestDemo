import { Controller, Get, Query, Param, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service'

import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse, ApiProperty } from '@nestjs/swagger'
import { CreateUserDto } from './dto/user.dto'


@Controller('user')
@ApiTags('用户')
export class UserController { 
  constructor(private readonly userService: UserService) { }
  
  @ApiOperation({
    summary: '根据用户 id 获取用户信息',
  })
  // @ApiBearerAuth('token')
  @Get(':id')
  getUserInfo(@Param('id') id:string | number) {
    return this.userService.getUserInfo(id)
  }

  @ApiOperation({
    summary: '新增用户'
  })
  @Post()
  @ApiResponse( 
    {
      status: HttpStatus.OK,
      type: CreateUserDto
    }
  )
  create(@Body() createUserDto:CreateUserDto) {
    return this.userService.createUser(createUserDto)
  }
}
