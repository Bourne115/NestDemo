import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  getUerInfo(): string {
    return ':rocket:qile';
  }
}
