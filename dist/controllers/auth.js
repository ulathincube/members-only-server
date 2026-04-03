import passport from 'passport';
import { validateLogin, validatePhrase } from '../config/validators.js';
import { matchedData, validationResult } from 'express-validator';
import { PASSPHRASE } from '../config/constants.js';
import userModel from '../models/user.js';
function loginUser(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorsArray = errors.array();
            const errorMessages = errorsArray.map(errorObject => errorObject.msg);
            const errorMessagesString = errorMessages.join(' ');
            return next(errorMessagesString);
        }
        const { email, password } = matchedData(req);
        passport.authenticate('local', (error, user, info, status) => {
            if (error)
                return next(error);
            if (!user) {
                return res.status(401).json({
                    error: 'Incorrect email address or password : Try again!',
                });
            }
            // console.log({ error, user, info, status });
            req.login(user, error => {
                if (error)
                    return next(error);
                delete user.password;
                return res.status(200).json(user);
            });
        })(req, res, next);
    }
    catch (error) {
        if (error instanceof Error)
            next(error);
    }
}
export function logout(req, res, next) {
    try {
        req.logout((error) => {
            if (error)
                return next(error);
            res.status(200).json({ message: 'Logged Out!' });
        });
    }
    catch (error) {
        if (error instanceof Error)
            next(error);
    }
}
async function verifyPhrase(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return next('Invalid input fields!');
        }
        const { passphrase } = matchedData(req);
        const match = passphrase === PASSPHRASE;
        // if match edit member_status to verified
        if (match) {
            console.log({ user: req.user });
            userModel.verifyUser(parseInt(req.user.user_id));
            return res.status(200).json({ verified: true });
            // edit database
        }
        res.status(200).json({ verified: false });
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
export const login = [...validateLogin, loginUser];
export const verify = [...validatePhrase, verifyPhrase];
//# sourceMappingURL=auth.js.map