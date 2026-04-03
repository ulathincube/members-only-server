import pool from '../config/pool.js';
async function createUser(userData) {
    const { firstName, lastName, email, password } = userData;
    try {
        const response = await pool.query('INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *;', [firstName, lastName, email, password]);
        // console.log(response);
        return response.rows[0];
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
async function findUserByEmail(email) {
    try {
        const response = await pool.query('SELECT * FROM users WHERE email = $1;', [
            email,
        ]);
        return response.rows[0];
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
async function findUserById(id) {
    try {
        const response = await pool.query('SELECT * FROM users WHERE user_id = $1;', [id]);
        return response.rows[0];
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
async function changeStatus(userId) {
    try {
        await pool.query('UPDATE users SET membership_status = verified WHERE user_id = $1', [userId]);
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
async function getAllUsers() {
    try {
        const response = await pool.query('SELECT user_id, firstname FROM users');
        return response.rows;
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
async function verifyUser(userId) {
    try {
        const response = await pool.query('UPDATE users SET membership_status = $1 WHERE user_id = $2', ['verified', userId]);
        return response.rows[0];
    }
    catch (error) {
        if (error instanceof Error)
            throw error;
    }
}
export default {
    createUser,
    findUserByEmail,
    findUserById,
    getAllUsers,
    verifyUser,
};
//# sourceMappingURL=user.js.map