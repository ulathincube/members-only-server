import { matchedData, validationResult } from 'express-validator';
import { validateUser } from '../config/validators.js';
import userModel from '../models/user.js';
import bcrypt from 'bcryptjs';
import { SALTROUNDS } from '../config/constants.js';
async function createNewUser(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw errors.array();
        }
        const { firstName, lastName, email, password } = matchedData(req);
        const salt = await bcrypt.genSalt(SALTROUNDS);
        const hashedPassword = await bcrypt.hash(password, salt);
        await userModel.createUser({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ message: 'User created' });
    }
    catch (error) {
        if (error instanceof Error)
            return next(error);
    }
    // create user
}
export const createUser = [...validateUser, createNewUser];
export async function getAllUsers(req, res, next) {
    try {
        const user = req.user;
        const allUsers = await userModel.getAllUsers();
        if (!allUsers)
            return res.status(404).json({ message: 'No current users!' });
        return res.status(200).json(allUsers);
    }
    catch (error) {
        if (error instanceof Error)
            return next(error);
    }
}
//# sourceMappingURL=user.js.map