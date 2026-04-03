interface Message {
    author: string;
    message: string;
}
declare function createMessage(messageData: Message): Promise<any>;
declare function getAllMessages(): Promise<any[] | undefined>;
declare function getMessagesByUserId(recipientId: Number, authorId: Number): Promise<any[] | undefined>;
declare const _default: {
    createMessage: typeof createMessage;
    getAllMessages: typeof getAllMessages;
    getMessagesByUserId: typeof getMessagesByUserId;
};
export default _default;
//# sourceMappingURL=message.d.ts.map