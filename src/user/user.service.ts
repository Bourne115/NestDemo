import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto'

type UserIdType = string | number
@Injectable()
export class UserService {

  getUserInfo(id:UserIdType): string {
    return ':rocket:qile' + id;
  }

  createUser(userInfo:CreateUserDto): CreateUserDto {
    return {...userInfo, ...{ password: ''}};
  }
}
