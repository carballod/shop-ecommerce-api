import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from 'src/auth/entities/user.entity';

export const GetUser = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as User;
    // console.log({ user });

    if (!user) {
      throw new InternalServerErrorException('User not found (request)');
    }

    return !data ? user : user[data];
  },
);
