import pool from '../config/pool.js';
async function createMessage(messageData) {
    const { author, message } = messageData;
    const authorId = parseInt(author);
    console.log({ authorId, message });
    try {
        const response = await pool.query('INSERT INTO messages (author_id, message) VALUES ($1, $2) RETURNING *;', [authorId, message]);
        return response.rows[0];
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
async function getAllMessages() {
    try {
        const response = await pool.query('SELECT message, firstname, lastname, message_id, author_id, created_at FROM messages JOIN users ON users.user_id = messages.author_id');
        return response.rows;
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
async function getMessagesByUserId(recipientId, authorId) {
    try {
        const firstResponse = await pool.query('SELECT * FROM messages WHERE author_id = $1 AND recipient_id = $2', [authorId, recipientId]);
        const secondResponse = await pool.query('SELECT * FROM messages WHERE author_id = $1 AND recipient_id = $2', [recipientId, authorId]);
        // console.log({
        //   first: firstResponse.rows,
        //   second: secondResponse.rows,
        // });
        return [...firstResponse.rows, ...secondResponse.rows];
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
export default { createMessage, getAllMessages, getMessagesByUserId };
//# sourceMappingURL=message.js.map