import messageModel from '../models/message.js';
import { matchedData, validationResult } from 'express-validator';
import { validateMessage } from '../config/validators.js';
import he from 'he';
export async function getMessages(req, res, next) {
    // console.log({ authenticated: req.isAuthenticated(), user: req.user });
    const messages = await messageModel.getAllMessages();
    const decodedMessages = messages?.map(messageObject => ({
        ...messageObject,
        message: he.decode(messageObject.message),
    }));
    // console.log({ messages });
    res.status(200).json(decodedMessages);
}
async function createNewMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        throw errors.array();
    }
    const { author, message } = matchedData(req);
    const newMessage = await messageModel.createMessage({
        author,
        message,
    });
    res.status(201).json({ message: newMessage });
    try {
    }
    catch (error) {
        if (error instanceof Error)
            next(error);
    }
}
export async function getMessagesByUserId(req, res, next) {
    try {
        const { userId: recipientId } = req.params;
        const authorId = req.user.user_id;
        if (recipientId && typeof recipientId === 'string') {
            const messages = await messageModel.getMessagesByUserId(parseInt(recipientId), parseInt(authorId));
            return res.status(200).json(messages);
        }
        return res.status(404).json([]);
    }
    catch (error) {
        if (error instanceof Error)
            next(error);
    }
}
export const createMessage = [...validateMessage, createNewMessage];
//# sourceMappingURL=messages.js.map