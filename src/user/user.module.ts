import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller'
import { SharedModule } from 'src/shared/shared.module';
import { UserProviders } from './user.providers';

@Module({
  imports: [SharedModule],
  providers: [UserService, ...UserProviders],
  controllers: [UserController]
})
export class UserModule {}
