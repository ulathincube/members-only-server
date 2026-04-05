import { Pool } from 'pg';
import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const __dirname = import.meta.dirname;
const sqlFile = join(__dirname, './schema.sql');

async function seedDatabase() {
  try {
    const query = readFileSync(sqlFile, 'utf-8').toString();
    await pool.query(query);
    console.log('database seeded! / edited');
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}

seedDatabase();
