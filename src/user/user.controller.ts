import { Controller, Get, Query, Param, Post, Body, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from './user.service'

import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse, ApiProperty } from '@nestjs/swagger'
import { CreateUserDto } from './dto/user.dto'
import { SystemService } from 'src/shared/system.service';
import { ConfigService } from '@nestjs/config';


@Controller('user')
@ApiTags('用户')
export class UserController { 
  constructor(
    private readonly userService: UserService,
    private readonly systemService: SystemService,
    private readonly configService: ConfigService
  ) { }
  
  // @ApiOperation({
  //   summary: '根据用户 id 获取用户信息',
  // })
  // // @ApiBearerAuth('token')
  // @Get(':id')
  // getUserInfo(@Param('id') id:string | number) {
  //   return this.userService.getUserInfo(id)
  // }

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


  @ApiOperation({
    summary: '获取环境变量'
  })
  @Get('env')
  getEnv() {
    const dbUrl = this.configService.get<string>('database.url')
    console.log('dbUrl', dbUrl)
    return dbUrl
  }

  @ApiOperation({
    summary: 'login'
  })
  @Post('login')
  login() {
    // throw '异常'
    throw new HttpException('登录超时', HttpStatus.GATEWAY_TIMEOUT)
    return 'xxx'
  }
}
