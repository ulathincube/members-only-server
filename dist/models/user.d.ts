export interface IUser extends Express.User {
    user_id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}
declare function createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}): Promise<any>;
declare function findUserByEmail(email: string): Promise<any>;
declare function findUserById(id: string): Promise<any>;
declare function getAllUsers(): Promise<any[] | undefined>;
declare function verifyUser(userId: number): Promise<any>;
declare const _default: {
    createUser: typeof createUser;
    findUserByEmail: typeof findUserByEmail;
    findUserById: typeof findUserById;
    getAllUsers: typeof getAllUsers;
    verifyUser: typeof verifyUser;
};
export default _default;
//# sourceMappingURL=user.d.ts.map