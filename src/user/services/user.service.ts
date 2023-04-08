import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto'
import { MongoRepository } from 'typeorm'
import { User } from '../entities/user.mongo.entity';


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

  createUser(userInfo:UserDto) {
    return this.userRepository.save(userInfo)
  }

  findAll() {
    return this.userRepository.findAndCount()
  }
}
