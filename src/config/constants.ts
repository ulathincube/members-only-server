import 'dotenv/config';

const PORT = Number(process.env.PORT);
const SALTROUNDS = Number(process.env.SALTROUNDS);
const DATABASE_URL = process.env.DATABASE_URL;
const SESSION_SECRET = process.env.SESSION_SECRET || 'zimbabwe';
const PASSPHRASE = process.env.PASSPHRASE;

export { PORT, SALTROUNDS, DATABASE_URL, SESSION_SECRET, PASSPHRASE };
