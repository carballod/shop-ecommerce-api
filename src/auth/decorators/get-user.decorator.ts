import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    console.log({ context });

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log({ user });

    if (!user) {
      throw new InternalServerErrorException('User not found (request)');
    }

    return user;
  },
);
