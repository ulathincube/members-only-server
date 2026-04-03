import * as express from 'express';
import type { IUser } from '../models/user.ts';

declare global {
  namespace Express {
    interface User {
      user_id: string;
    }
  }
}
