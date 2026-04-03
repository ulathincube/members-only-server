import { Request, Response, NextFunction } from 'express';
export declare function getMessages(req: Request, res: Response, next: NextFunction): Promise<void>;
declare function createNewMessage(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function getMessagesByUserId(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare const createMessage: (import("express-validator").ValidationChain | typeof createNewMessage)[];
export {};
//# sourceMappingURL=messages.d.ts.map