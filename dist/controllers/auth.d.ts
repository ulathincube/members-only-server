import { Request, Response, NextFunction } from 'express';
declare function loginUser(req: Request, res: Response, next: NextFunction): void;
export declare function logout(req: Request, res: Response, next: NextFunction): void;
declare function verifyPhrase(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
export declare const login: (import("express-validator").ValidationChain | typeof loginUser)[];
export declare const verify: (import("express-validator").ValidationChain | typeof verifyPhrase)[];
export {};
//# sourceMappingURL=auth.d.ts.map