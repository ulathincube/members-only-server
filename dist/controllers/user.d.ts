import { Request, Response, NextFunction } from 'express';
declare function createNewUser(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare const createUser: (import("express-validator").ValidationChain | typeof createNewUser)[];
export declare function getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=user.d.ts.map