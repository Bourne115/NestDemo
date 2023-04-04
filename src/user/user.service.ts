import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto'
import { MongoRepository } from 'typeorm'
import { User } from './entities/user.mongo.entity';


type UserIdType = string | number
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>
  ) {}
  
  getUserInfo(id:UserIdType): string {
    return ':rocket:qile' + id;
  }

  createUser(userInfo:CreateUserDto) {
    // : Partial<CreateUserDto>
    // return {...userInfo, ...{ password: ''}};
    return this.userRepository.save({
      name: 'hhh',
      email: '1@123.com'
    })
  }

  findAll() {
    return this.userRepository.findAndCount({})
  }
}
