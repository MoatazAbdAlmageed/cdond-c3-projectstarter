import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { User } from './user.interface';

export interface IGetUserAuthInfoRequest extends Request {
  user: {
    username: string;
  };
}

@Injectable({ scope: Scope.REQUEST })
export class CurrentUser {
  constructor(
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest,
  ) {}

  getUser(): User {
    return this.request?.user;
  }
}
