import { body } from 'express-validator';
export const validateUser = [
    body('firstName')
        .trim()
        .notEmpty()
        .withMessage('Please provide a firstName!')
        .isLength({
        min: 3,
        max: 30,
    })
        .withMessage('Please provide a valid firstName with between 3 - 30 characters in length!')
        .escape(),
    body('lastName')
        .trim()
        .notEmpty()
        .withMessage('Please provide a lastName!')
        .isLength({
        min: 3,
        max: 30,
    })
        .withMessage('Please provide a valid lastName with between 3 - 30 characters in length!')
        .escape(),
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Please provide an email address!')
        .isEmail()
        .withMessage('Please provide a valid email address!')
        .escape(),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('Please provide a password!')
        .isLength({
        min: 6,
        max: 18,
    })
        .withMessage('Please provide a password with 6 - 12 characters in length!')
        .escape(),
];
export const validateLogin = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Please provide an email address!')
        .isEmail()
        .withMessage('Please provide a valid email address!')
        .escape(),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('Please provide a password!')
        .isLength({
        min: 6,
        max: 18,
    })
        .withMessage('Please provide a password with 6 - 12 characters in length!')
        .escape(),
];
export const validatePhrase = [
    body('passphrase')
        .trim()
        .notEmpty()
        .withMessage('Please provide a passphrase')
        .escape(),
];
export const validateMessage = [
    body('author')
        .trim()
        .notEmpty()
        .withMessage('Please provide an author')
        .escape(),
    body('message')
        .trim()
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('Please provide a valid message')
        .escape(),
];
//# sourceMappingURL=validators.js.map